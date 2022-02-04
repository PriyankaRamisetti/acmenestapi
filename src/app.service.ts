import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  validatelogin(body){
    console.log(body);
    var user = body.username;
    var password = body.password;
    if(user == 'admin' && password == 'admin' ){
      return '{"status":"success"}';
    }else{
      return '{"status":"failure"}';
    }
  }

  planslist(){
    var res=[{"planname":"200MEGA"}, 
    {"planname":"300MEGA"},
    {"planname":"400MEGA" },
    {"planname":"500MEGA"},
    {"planname":"600MEGA"}];

    return res;

  }


  plandetails(body)
  {
    var plandetails ={"200MEGA":{"name":"200MEGA","Validaty":"1 Year","Cost":"100BRL","DownloadSpeed":"200Mbps","UploadSpeed":"50Mbps"},
    "300MEGA":{"name":"300MEGA","Validaty":"2 Years","Cost":"150BRL","DownloadSpeed":"300Mbps","UploadSpeed":"75Mbps"},
    "400MEGA":{"name":"400MEGA","Validaty":"1.5 Years","Cost":"200BRL","DownloadSpeed":"400Mbps","UploadSpeed":"100Mbps"},
    "500MEGA":{"name":"500MEGA","Validaty":"3 Years","Cost":"250BRL","DownloadSpeed":"500Mbps","UploadSpeed":"150Mbps"},
    "600MEGA":{"name":"600MEGA","Validaty":"3 Years","Cost":"300BRL","DownloadSpeed":"600Mbps","UploadSpeed":"200Mbps"}
  };
  var plan = body.plan_name;
  console.log(plandetails[plan]);
  return plandetails[plan];
  }
}
