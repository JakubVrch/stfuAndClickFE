import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { TeamResponse, ClickRequest, ClickResponse } from "./types"

const config:AxiosRequestConfig<null> = {
    baseURL: "https://klikuj.herokuapp.com/api/v1/",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json; charset=utf-8",
    }
  }
class ApiService {
    private static instance: ApiService;
    private axios: AxiosInstance;

    private constructor() {
        const http = axios.create(config);
      
        this.axios = http;
    }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    public getTeams = () => (this.axios.get<TeamResponse[],AxiosResponse<TeamResponse[],null>>("/leaderboard"))
    public postClick = (data: ClickRequest) => (this.axios.post<ClickResponse,AxiosResponse<ClickResponse,ClickRequest>>("/klik", data))
}
  
  export const apiService = ApiService.getInstance();