import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];

  getPosts() {
    // En un escenario real, aquí se haría una petición HTTP para obtener los datos.
    return this.posts;
  }

  addPost(content: string) {
    const newPost: Post = {
      id: Date.now(),  // Usamos el timestamp como ID temporal
      content: content,
      createdAt: new Date()
    };
    this.posts.push(newPost);
  }

  deletePost(postId: number) {
    const index = this.posts.findIndex(post => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
