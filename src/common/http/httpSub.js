/**
 * httpSub.js
 * @author wangbo
 * @since 2021/1/22
 */
export default {
    fns: [],
    auth: false,
    getAuth() {
        return this.auth;
    },
    setAuth(value) {
        this.auth = value;
    },
    authSubscribe(key, fn) {
        console.log('判断权限', this.auth);
        if (this.auth) {
            fn();
            return;
        }
        this.subscribe(key, fn);
    },
    subscribe(key, fn) {
        if (!this.fns[key]) {
            this.fns[key] = [];
        }
        this.fns[key].push(fn);
    },
    publish(...arg) {
        const key = arg.shift();
        const _fns = this.fns[key];
        if (!_fns || !_fns.length) {
            return;
        }
        _fns.forEach(fn => fn());
    },
    unSubscribe(key) {
        delete this.fns[key];
    },
};
