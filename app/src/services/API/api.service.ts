import axios, { AxiosInstance, AxiosPromise } from "axios";
import { TeamResponse, ClickRequest, ClickResponse } from "./types"

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  };

class ApiService {
    private static instance: ApiService;
    private axios: AxiosInstance;

    private constructor() {
        const http = axios.create({
            baseURL: "https://klikuj.herokuapp.com/api/v1/",
            headers
          });
      
        this.axios = http;
    }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    public getTeams = ():AxiosPromise<TeamResponse[]> => (this.axios.get("/leaderboard"))
    public postClick = (data: ClickRequest):AxiosPromise<ClickResponse> => (this.axios.post("/klik", data))
}
  
  export const apiService = ApiService.getInstance();