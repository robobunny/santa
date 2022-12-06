import { hashPassword } from '@redwoodjs/api'

const FAKE_PW = 'passwd';

export const users = [ "Billy", "Stevie", "Kevin", "Molly", "Cassie", "Mary", "Elizabeth", "Aydin", "Mom", ].map((user, i)=>{
  let [hashedPassword, salt] = hashPassword(FAKE_PW);
  return {
    id: i+1,
    name: user,
    email: user.toLowerCase()+"@example.com",
    hashedPassword,
    salt,
    roles: user==="Mom" ? "mom" : user==="Billy" ? "admin" : "basic",
  };
});

export const wishes = ["Test wish 1", "test wish 2"].map((title)=>({
  title,
  description: "Test description",
  url: "www.example.com/test",
}));


