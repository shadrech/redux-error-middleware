/**
 * middleware to handle errors
 * @param {object} custom_actions
 *  {
 *    error: [errorAction],
 *    forbidden: [logoutAction, notifyAction]
 *  }
 */

export default (custom_actions = {}) => {
  /**
   * build error actions
   */
  const actions = {
    error: [...custom_actions.error || []],
    forbidden: [...custom_actions.forbidden || []]
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
  const dispatchErrorActions = (store, error, error_actions) => {
    error_actions.forEach(action => {
      if (typeof action === 'function') {
        return store.dispatch(action(error));
      }

      return store.dispatch(action);
    });
  };

  /**
   * returns action type based on isForbidden response
   */
  const getActionType = (error) => {
    return isForbidden(error) ? 'forbidden' : 'error';
  };

  /**
   * dispatch actions based on error type - 403, etc.
   */
  return store => next => action => {
    if (action.error) {
      dispatchErrorActions(store, action.error, actions[getActionType(action.error)]);
    }

    return next(action);
  };
}
