/**
 * middleware to handle errors
 * @param {object} custom_actions
 *  {
 *    error: [],
 *    forbidden: []
 *  }
 */
function createErrorMiddleware(custom_actions) {

  const actions = {
    // error: [
    //   {type: 'SOME_ACTION', message: 'on error message'},
    //   {type: 'OTHER_ACTION', message: 'another message'},
    //   function() {
    //     return (dispatch, getState) => {
    //       console.log(JSON.stringify(getState()));
    //       dispatch({type: 'XX_MM', message: 'xxxxx'});
    //     }
    //   }
    // ],
    error: [],
    forbidden: []
  };

  /**
   * is this a 403 error
   */
  const isForbidden = (error = {}) => {
    return error.response && error.response.status === 403;
  };

  /**
   * dispatches each error action
   */
  const dispatchActions = (store, error_actions) => {
    error_actions.forEach(action => {
      if (typeof action === 'function') {
        return store.dispatch(action());
      }

      return store.dispatch(action);
    });
  };

  /**
   * dispatch actions based on error type - 403, etc.
   */
  return store => next => action => {
    if (action.error) {
      if (isForbidden(action.error)) {
        return dispatchActions(store, actions['forbidden']);
      }

      return dispatchActions(store, actions['error']);
    }

    return next(action);
  };
}

const errorMiddleware = createErrorMiddleware();

export default errorMiddleware;
