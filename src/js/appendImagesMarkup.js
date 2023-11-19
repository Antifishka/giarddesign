import { refs } from './refs';

const markup = `<li>
            <a href="./src/images/projects/project-big-10.webp">
              <picture>
                <source srcset="./src/images/projects/project-10.webp 1x,
                  ./src/images/projects/project-10@2x.webp 2x" type="image/webp" />
            
                <source srcset="./src/images/projects/project-10.jpg 1x,
                  ./src/images/projects/project-10@2x.jpg 2x" type="image/jpg" />
            
                <img src="./src/images/projects/project-10.jpg" alt="project-10" class="object-cover" width="100%" height="601px"
                  loading="lazy">
              </picture>
            </a>
          </li>
          
          <li>
            <a href="./src/images/projects/project-big-11.webp">
              <picture>
                <source srcset="./src/images/projects/project-11.webp 1x,
                  ./src/images/projects/project-11@2x.webp 2x" type="image/webp" />
            
                <source srcset="./src/images/projects/project-11.jpg 1x,
                  ./src/images/projects/project-11@2x.jpg 2x" type="image/jpg" />
            
                <img src="./src/images/projects/project-11.jpg" alt="project-11" class="object-cover" width="100%" height="338px"
                  loading="lazy">
              </picture>
            </a>
          </li>`;

export const appendImagesMarkup = () => {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}          