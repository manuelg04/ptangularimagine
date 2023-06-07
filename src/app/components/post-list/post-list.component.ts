import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
  sortPostsAsc() {
    this.posts.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  sortPostsDesc() {
    this.posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  onDeletePost(postId: number) {
    this.postService.deletePost(postId);
    this.posts = this.postService.getPosts(); // Actualizar los posts después de eliminar uno
  }
}
