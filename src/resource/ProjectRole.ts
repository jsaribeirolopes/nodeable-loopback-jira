import {baseResource} from './baseResource';

/**
 * ProjectRole 
 *
 * @constructor ProjectRole
 * @property {IConnector} connector the jira connector instance
 */

export class ProjectRole extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Adds an actor (user or group) to a project role.
     *
     * @method addActorUsers
     * @memberOf ProjectRole#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addActorUsers = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "projectIdOrKey": args[0],
             "id": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('addActorUsers','POST','rest/api/2/project/:projectIdOrKey/role/:id',options,callback)
    };
    
    /**
     * Deletes actors (users or groups) from a project role.
     * 
     * 
     * Delete a user from the role: /rest/api/2/project/{projectIdOrKey}/role/{roleId}?user={username}
     * Delete a group from the role: /rest/api/2/project/{projectIdOrKey}/role/{roleId}?group={groupname}
     * the username to remove from the project rolethe groupname to remove from the project role
     *
     * @method deleteActor
     * @memberOf ProjectRole#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.user user the username to remove from the project role
     * @param {string} options.group group the groupname to remove from the project role
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteActor = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "projectIdOrKey": args[0],
             "id": args[1],
             "user": args[2],
             "group": args[3],
             "token": args[4]
            
        };

        return this.makeRequest('deleteActor','DELETE','rest/api/2/project/:projectIdOrKey/role/:id',options,callback)
    };
    
    /**
     * Returns the details for a given project role in a project.
     *
     * @method findById
     * @memberOf ProjectRole#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    findById = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "projectIdOrKey": args[0],
             "id": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('findById','GET','rest/api/2/project/:projectIdOrKey/role/:id',options,callback)
    };
    
    /**
     * Returns all roles in the given project Id or key, with links to full details on each role.
     *
     * @method getProjectRoles
     * @memberOf ProjectRole#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getProjectRoles = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "projectIdOrKey": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('getProjectRoles','GET','rest/api/2/project/:projectIdOrKey/role',options,callback)
    };
    
    /**
     * Updates a project role to include the specified actors (users or groups).
     *
     * @method setActors
     * @memberOf ProjectRole#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.categorisedActors categorisedActors 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    setActors = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "projectIdOrKey": args[0],
             "id": args[1],
             "data": args[2]
            
        };

        return this.makeRequest('setActors','PUT','rest/api/2/project/:projectIdOrKey/role/:id',options,callback)
    };
    

}
