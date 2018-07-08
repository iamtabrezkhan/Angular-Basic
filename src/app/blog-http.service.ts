import { Injectable } from '@angular/core';
// importing http client to make the requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

// import observable related code
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http:HttpClient) { 
    console.log("blog-http service was called");

  }

  // method to return all the blogs
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl+'/all?authToken=MGY4MmJjNDEwM2FmMTU4NzRmYTkwZDQxNDM3OThiMDU3YjQzYTU4YTAyZTkxNGEyMzMzMDQ2ZDE2YWU0YzkzOWY0MjdmMThlOWFjZTFiZjdjZTUxNzAyYzE2ZDI3YWM0MzM4NTUwZDZhNGUyZmFjMmIzNjJhMmU1Y2VjMzljNGU4NA==');
    console.log(myResponse);
    return myResponse;
    
  }

  // method to get a particular blog
  
  public getSingleBlogInformation(currentBlogId): any {
    
  }// end get blog information function
}
