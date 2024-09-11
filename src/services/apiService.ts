// this is an abstract file for handling network requests
class ApiService {
  async get(url: string) {
    try {
      return await (await fetch(url)).json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // global error handling for api
      console.error(error); // we can send this to error monitoring service
      throw new Error("Get Api call failed with the following error " + error.message);
    }
  }
}

export default new ApiService();
