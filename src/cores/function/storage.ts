import { Base64 } from 'js-base64';

/** 缓存 storage 是否缓存，详见 .env[场景] 文件配置 */
const STORAGE_ENCODE = parseInt(import.meta.env.VITE_STORAGE_ENCODE);

class WebLocalStorage {
  public encodeKey(key: string): string {
    STORAGE_ENCODE && (key = Base64.encode(key));
    return key;
  }

  public getValue(key: string) {
    const data = localStorage.getItem(this.encodeKey(key)) as string;
    return JSON.parse(data);
  }

  public setValue<T>(key: string, value: T): void {
    const data = JSON.stringify(value);
    localStorage.setItem(this.encodeKey(key), data);
  }

  public removeKey(key: string): void {
    localStorage.removeItem(this.encodeKey(key));
  }

  public clear(): void {
    localStorage.clear();
  }

  public getAllKeys(): string[] {
    return Object.keys(localStorage);
  }
  public hasKey(key: string): boolean {
    return this.getAllKeys().includes(this.encodeKey(key));
  }
}

class WebSessionStorage {
  public encodeKey(key: string): string {
    STORAGE_ENCODE && (key = Base64.encode(key));
    return key;
  }

  public getValue(key: string) {
    const data = sessionStorage.getItem(this.encodeKey(key)) as string;
    return JSON.parse(data);
  }

  public setValue<T>(key: string, value: T): void {
    const data = JSON.stringify(value);
    sessionStorage.setItem(this.encodeKey(key), data);
  }

  public removeKey(key: string): void {
    sessionStorage.removeItem(this.encodeKey(key));
  }

  public clear(): void {
    sessionStorage.clear();
  }

  public getAllKeys(): string[] {
    return Object.keys(sessionStorage);
  }

  public hasKey(key: string): boolean {
    return this.getAllKeys().includes(this.encodeKey(key));
  }
}

export const webLocalStorage = new WebLocalStorage();
export const webSessionStorage = new WebSessionStorage();
