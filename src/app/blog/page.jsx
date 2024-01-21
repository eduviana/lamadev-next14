import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next: {revalidate:3600}})
  
  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const Blogpage = async () => {
  
  // FETCH DATA WITH AN API
  const posts = await getData()

  // const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  );
};

export default Blogpage;

// import PostCard from "@/components/postCard/postCard";
// import styles from "./blog.module.css";

// const Blogpage = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.post}>
//         <PostCard />
//       </div>
//       <div className={styles.post}>
//         <PostCard />
//       </div>
//       <div className={styles.post}>
//         <PostCard />
//       </div>
//       <div className={styles.post}>
//         <PostCard />
//       </div>
//     </div>
//   );
// };

// export default Blogpage;
