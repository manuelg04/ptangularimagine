import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost: string = '';

  constructor(private postService: PostService) { }

  onAddPost() {
    if (!this.newPost.trim()) {
      // Si el post está vacío, no hagamos nada
      return;
    }

    // En un escenario real, aquí harías una petición HTTP para agregar el nuevo post al servidor.
    // Por ahora, solo agregaremos el post al servicio de posts.
    this.postService.addPost(this.newPost);

    // Limpia el texto del post después de agregarlo
    this.newPost = '';
  }
}
