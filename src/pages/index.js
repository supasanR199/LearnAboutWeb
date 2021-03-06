
import React from 'react'

import './index.css'
export const Home = () => {
  return (
    <>
      <div className= "container-flex Home_Top " style={{
         background: 'url("/img/background3.jpg")',
         height: "800px",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         opacity: 0.4,
         filter: "alpha(opacity=40)",
         backgroundSize: "cover",
         position: "absolute",
         width: "100%",
      }}>
        <h1 id= "interview0">เรียนรู้ทักษะแห่งอนาคต</h1>
        <h2 id ="interview1">พัฒนาให้คุณกลายเป็น นักพัฒนาเทคโนโลยีรุ่นใหม่</h2>
        <h3 id = "interview2" >สร้างสรรค์โปรเจคของคุณด้วยหลักสูตร </h3>
        <h3 id = "interview3">ที่จะทำให้คุณมองเรื่องยากให้กลายเป็นเรื่องง่าย</h3>
        <h3 id = "interview4">เพียงเข้าใจถึงภาพรวม</h3>
        

        <h3 id="interview5">หลักสูตรที่แนะนำ</h3>
        <h3 id="interview6">เรามีหลักสูตรที่จะอธิบายถึงความซับซ้อนและองค์ประกอบของหุ่นยนต์หรือระบบอัติโนมัติต่างๆ</h3>
        <h3 id ="interview7"> ให้อยู่ในรูปแบบการเปรียบเทียบกับธรรมชาติและสิ่งรอบตัวในชีวิตประจำวันเพื่อส่งเสริมการเข้าใจ</h3>
        <h3 id ="interview8">ภาพรวมของระบบต่างๆเพื่อสามารถนำไปต่อยอดในอนาคตได้อย่างง่ายดายแน่นอน</h3>


      </div>
          
    </>
    
    
    
    
  );
}

export default Home;