import { EncryptStorage } from 'encrypt-storage';

class EncryptStorageService {
  private encryptStorageInstance: EncryptStorage | undefined;

  constructor() {
    if (process.env.REACT_APP_STORAGE_SECRET_KEY) {
      this.encryptStorageInstance = new EncryptStorage(process.env.REACT_APP_STORAGE_SECRET_KEY, {
        storageType: 'localStorage',
      });
    }
  }

  setItem(key: string, value: any): void {
    this.encryptStorageInstance?.setItem(key, value);
  }

  getItem(key: string): any {
    return this.encryptStorageInstance?.getItem(key);
  }

  removeItem(key: string): void {
    return this.encryptStorageInstance?.removeItem(key);
  }

  clearStorage(): void {
    return this.encryptStorageInstance?.clear();
  }
}

const EncryptStorageServiceInstance = new EncryptStorageService();

export { EncryptStorageServiceInstance as encryptedStorage };
