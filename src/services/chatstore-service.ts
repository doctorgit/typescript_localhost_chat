// @ts-ignore
import { StorageArea } from 'kv-storage-polyfill';  // default storage namespace

const collectAsyncIterator = async (asyncIterator: any) => {
    const array = [] as any;
    for await (const entry of asyncIterator) {
        array.push(entry);
    }
    return array;
};

const getAsyncLastKey = async (asyncIterator: any) => {
    let index = 0;
    // eslint-disable-next-line
    for await (const entry of asyncIterator) {
        index++;
    }
    return index;
};

const usersDB = new StorageArea('Users');

const checkAsyncUserName = async (name: string) => {
    return await usersDB.get(name);
};

const saveAsyncUser = async (key: string, value: any) => {
    return await usersDB.set(key, value);
};

export default class ChatStoreService {

    data = new StorageArea('History');

    checkUserName(name: string) {
        return checkAsyncUserName(name);
    }

    doLogout({ name }: { name: string }) {
        saveAsyncUser(name, { online: false })
    }

    saveUserName(name: string) {
        return saveAsyncUser(name, { online: true });
    }

    getChatHistory() {
        return collectAsyncIterator(this.data.entries());
    }

    sendMessage({ uid, text }: any) {
        return getAsyncLastKey(this.data.keys())
            .then((lastId) => {
                const id = lastId + 1;
                const newMessage = {
                    id,
                    time: new Date(),
                    uid,
                    text
                };

                return (async () => {
                    await this.data.set(id, newMessage);

                    return collectAsyncIterator(this.data.entries());
                })()
            });
    }
}
