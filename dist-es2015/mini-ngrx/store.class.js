import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
export class MiniStore extends Observable {
    constructor(_dispatcher, _reducer, state$) {
        super();
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        this.source = state$;
    }
    select(pathOrMapFn) {
        const mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    }
    lift(operator) {
        const store = new MiniStore(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    }
    dispatch(action) {
        this._dispatcher.next(action);
    }
    next(action) {
        this._dispatcher.next(action);
    }
    error(err) {
        this._dispatcher.error(err);
    }
    complete() {
        /*noop*/
    }
}
//# sourceMappingURL=store.class.js.map