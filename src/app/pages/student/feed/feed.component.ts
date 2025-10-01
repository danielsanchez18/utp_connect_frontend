import { Component } from '@angular/core';
import { ComponentStudentFeedAddPost } from '@components/student/feed/add-post/add-post.component';
import { ComponentStudentFeedListPosts } from '@components/student/feed/list-posts/list-posts.component';
import { ComponentStudentFeedSearch } from "@components/student/feed/search/search.component";

@Component({
  selector: 'page-student-feed',
  imports: [
    ComponentStudentFeedSearch,
    ComponentStudentFeedAddPost,
    ComponentStudentFeedListPosts,
  ],
  templateUrl: './feed.component.html',
})
export class PageStudentFeed { }
