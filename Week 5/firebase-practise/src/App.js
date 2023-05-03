import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from './firebase/init'
import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from 'firebase/firestore'

import React from 'react'

import './App.css';

function App() {

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  async function updatePost() {
    const hardcodedId = "9wP4wahPvkoWn8mGhQv0"
    const postRef = doc(db, "posts", hardcodedId);
    const post = await getPostById(hardcodedId);
    console.log(post)
    const newPost = {
      ...post,
      title: 'Land a $400k job'
    }
    console.log(newPost)
    updateDoc(postRef, newPost)
  }

  function deletePost() {
    const hardcodedId = "9wP4wahPvkoWn8mGhQv0"
    const postRef = doc(db, "posts", hardcodedId);
    deleteDoc(postRef)
  }

  function createPost() {
    const post = {
      title: "Finish Firebase Section",
      description: "Do Frontend Simpilifed",
      uid: user.uid,
    }
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map((elem) => ({...elem.data(), id: elem.id}));

    console.log(posts);
  }

  async function getPostByUid() {
    const postCollectionRef = await query(
      collection(db, "posts"),
      where("uid", "==", user.uid)
    );
    const { docs } = await getDocs(postCollectionRef);

    console.log(docs.map(doc => doc.data()));

  }

  async function getPostById(id) {
    const postRef = doc(db, "posts", id)
    const postSnap = await getDoc(postRef);
    return postSnap.data();
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user)
      if(user) {
        setUser(user)
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'password')
      .then((user) => {
        console.log(user)
      }).catch((error) => {
        console.log(error);
      })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'password')
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      }).catch((error) => {
        console.log(error)
      })
  }

  function logout() {
    signOut(auth)
    setUser({})
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Log out</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get ID Post</button>
      <button onClick={getPostByUid}>Get UID Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default App;
