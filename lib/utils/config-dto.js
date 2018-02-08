export default class ConfigDto {
    constructor() {
        this._config = {};
        this._services = {};
        this._middleware = {};
        this._routes = [];
    }

    /**
     * @return {object}
     */
    getConfig() {
        return this._config;
    }

    /**
     * @param {object} config
     * @return {ConfigDto}
     */
    addConfig(config) {
        this._config = {
            ...config,
            ...this._config
        };
        return this;
    }

    /**
     * @return {object}
     */
    getServices() {
        return this._services;
    }

    /**
     * @param {object} services
     * @return {ConfigDto}
     */
    addServices(services) {
        this._services = {
            ...services,
            ...this._services
        };
        return this;
    }

    /**
     * @return {object}
     */
    getMiddleware() {
        return this._middleware;
    }

    /**
     * @param {object} middleware
     * @return {ConfigDto}
     */
    addMiddleware(middleware) {
        this._middleware = {
            ...middleware,
            ...this._middleware
        };
        return this;
    }

    /**
     * @return {object}
     */
    getRoutes() {
        return this._routes;
    }

    /**
     * @param {object} routes
     * @return {ConfigDto}
     */
    addRoutes(routes) {
        this._routes = [
            ...routes,
            ...this._routes
        ];
        return this;
    }
}