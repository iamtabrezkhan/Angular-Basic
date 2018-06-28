import { Component, OnInit } from '@angular/core';

// importing route related code
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  //empty object
  public currentBlog;

  //declare a dummy blog variable here
  public allBlogs = [
    {
    "blogId": "1",
      "lastModified": "2018-06-20T12:20:47.854Z",
      "created": "2018-06-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 1000,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2018-06-20T12:20:47.854Z",
      "created": "2018-06-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 1000,
      "bodyHtml": "<h1>this is a big text </h1> <p>Small text </p>",
      "description": "this is the description of example blog and is edited.",
      "title": "This is an example blog"
    },
    {
      "blogId": "3",
      "lastModified": "2018-06-20T12:20:47.854Z",
      "created": "2018-06-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 1000,
      "bodyHtml": "this is the blog body. this is the blog body. this is the blog body. this is the blog body.",
      "description": "this is the third blog description",
      "title": "This is blog 3"
    }
  ]

  constructor(private _route: ActivatedRoute, private router: Router) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("ngOnInitCalled");
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this blogId out of the overall array
    this.getSingleBlogInformation(myBlogId);
  }

  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop from type script
    //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

    for (let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
  }// end get blog information function

}
