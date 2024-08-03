async function fetchData<T = any>(url: string) {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  }
  
async function fetchDefault(){
    const data =await  fetchData('https://jsonplaceholder.typicode.com/posts');
    console.log(data)

}


fetchDefault()

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

async function fetchPost() {
    const post = await fetchData<Post>("https://jsonplaceholder.typicode.com/posts/1");
    console.log(post); // Output: { userId: 1, id: 1, title: "...", body: "..." }
  }
  
  fetchPost();