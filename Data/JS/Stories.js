// query selectors
let posts = [];
let filteredPosts = [];
const POSTS_TO_SHOW = 6;
let maxDisplayLimit = POSTS_TO_SHOW;
const postContainer = document.querySelector('.post-container');
const search = document.querySelector('[type="search"]');

// create cards and update the UI
function generatePost(post) {
    const returnPostDate = (date) => `${
    ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'][date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const article = document.createElement('article');
    article.classList.add('post');
    article.innerHTML = `
  <div class="post__meta">

   
  </div>
  <div class="post__author">
    <img class=" post__author--avatar" width="55" src="${post.meta.author.avatar}" alt="${post.user.name[0].firstName} ${post.user.name[1].lastName}">
    <div>
      <p class=" post__author--name">${post.user.name[0].firstName} ${post.user.name[1].lastName} <i  style="color: #2d88ff;font-size: 15px;"  class="fa-solid fa-circle-check"></i></p>
      <p class=" post__date">${returnPostDate(new Date(post.meta.date))}</p>
    </div>
  </div>
  <div class="post__body">
    ${post.noidung}
    <br>
    <br >
   <${post.type} src="${post.linkfile}"  width="80%" style="display: ${post.display};" controls>
   <source src="${post.linkfile}" type="video/mp4">  
   </${post.type}>

  </div>


  <p> ${post.meta.tags.map((tag) => `<span class="post__tag">${tag}</span>`).join('')}</p>
  `;
  return article;
}

function loadPosts(){
  const frag = document.createDocumentFragment();
  filteredPosts.slice(0, maxDisplayLimit).map((post) => frag.appendChild(generatePost(post)));
  postContainer.innerHTML = '';
  postContainer.appendChild(frag);
}

function filterPosts() {
  const searchFilter = (post) => [post.noidung, post.meta.date, post.user.name[0].firstName, post.user.name[1].lastName, post.meta.tags.map((t) => t).join('')]
    .join('')
    .toLowerCase()
    .indexOf(search.value.toLowerCase()) !== -1;
  filteredPosts = posts.filter(searchFilter);
  loadPosts();
}

// fetch the data
async function fetchPosts() {
    await fetch('./posts.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
          posts = data.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
          filterPosts();
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
fetchPosts();
// update number of posts with btn click
function viewMorePosts(){
  maxDisplayLimit += POSTS_TO_SHOW;
  loadPosts();
}

document.querySelector('.btn--view').addEventListener('click', viewMorePosts);

search.addEventListener('keyup', filterPosts);