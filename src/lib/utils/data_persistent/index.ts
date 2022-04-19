export default class DataPersistent{
    private static setLocalData(key:string,data:any){
        localStorage.setItem(key,JSON.stringify(data))
    }
    private static getLocalData<T>(key:string):T|null{
         try {
          return  JSON.parse(localStorage.getItem(key) as string)
        } catch (error) {
            return null
        }

    }

    public static get authToken(){
        return this.getLocalData<string>("authToken")
    }

    public static setAuthToken(data:string){
        this.setLocalData("authToken",data)
    }
}