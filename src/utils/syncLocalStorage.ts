import { set } from "local-storage";

const syncLocalStorage = () => {
    set('app_local_chat', new Date().getTime());
};

export default syncLocalStorage;
