
import '../image_project/FormNhapHoc/nhaphoc.png'

import '../image_project/CRM/CRM_KhachHang.png';
import '../image_project/CRM/CRM_KhachHang_ThongTinLichHen.png'
import '../image_project/CRM/CRM_LoTrinh.png'
import '../image_project/CRM/CRM_LopHoc.png'
import '../image_project/CRM/CRM_LopHoc_ChamDiem.png'
import '../image_project/CRM/CRM_LopHoc_ChiTietBaiTap.png'
import '../image_project/CRM/CRM_MonHoc.png'
import '../image_project/CRM/CRM_NhomQuyen.png'
import '../image_project/CRM/CRM_THUNGAN2.png'
import '../image_project/CRM/CRM_ThuNgan.png'

import '../image_project/CourseOnline/BangDiem.png'
import '../image_project/CourseOnline/ChiTietBaiHoc.png'
import '../image_project/CourseOnline/ChiTietBaiTap.png'
import '../image_project/CourseOnline/ChiTietMonHoc.png'
import '../image_project/CourseOnline/ChiTietMonHoc_BaiTap.png'
import '../image_project/CourseOnline/DanhSachLopHoc.png'
import '../image_project/CourseOnline/DanhSachMonHoc.png'

import '../image_project/CV/Dashboard.png'
import '../image_project/CV/CreateCV_Experience.png'
import '../image_project/CV/CreateCV_JOB.png'
import '../image_project/CV/CreateCV_Project.png'
import '../image_project/CV/CreateCV.png'
import '../image_project/CV/CreateCV_Done.png'

const data = {

    // INFO MYSELF
    name: 'Tan Truc Nguyen',
    email: 'trucnguyen2515@gmail.com',
    phone: '(+84)909015594',
    birthday: 'May 15 1994',
    address: 'Go Vap District, Ho Chi Minh City',
    intro: [
        `I am an enthusiastic and passionate Front-end Developer who have 2 years of experience in using Javascript, HTML and CSS. Moreover, all of my basic knowledge such as Design Pattern, Object Oriented and SOLID Principles are the enormous fundamental knowledge leading me to be Full Stack Developer down the road.`,
        `Additionally, I always try my best to explore my own capability, challenge my limit by researching and learning new technologies as well as doing some daily projects when I have my leisure time. Finally, I want to raise my voice and climb to the mountain's peak by working in a flexible, multicultural, and active working environment. `
    ],

    // SKILL
    skill: {
        proficient: ["HTML5", "CSS3", "JavaScript"],
        familiar: ["Webpack", "SCSS", "ReactJS", "Angular 2+", "Node.JS (WebAPI)", "MongoDB", "Git"],
        other: ["Reading English documents","Microsoft office","Time management","Task management"]
    },

    // EXPERIENCE
    experience: [
        {
            time: `April 2019 to Oct 2020`,
            nameCompany: "Cybersoft Academy",
            position: "Front-end Developer",
            describtion:`
                <ul style="list-style-type:disc;padding-left:16px">
                    <li>Developed an ecosystem, built a couple of websites to manage courses, users' information and employees in the company.</li>
                    <li>Using HTML5, CSS3, Webpack, JavaScript, ReactJS, Angular 6, ASP.NetCore (Web APIs), MS SQL Server, T-SQL in projects.</li>
                    <li>Learned new Microsoft technologies. </li>
                </ul>
            `,
            a:
                `

                    <ul class="project project4">
                        <div class="d-flex dvp">
                            <div class="stt"><p>1</p></div>
                            <p class="tt">Resume Builder</p>
                        </div>
                        <li><span>Description:</span> 
                            An app is to help people to create simple resume.
                        </li>
                        <li><span>Tasks assignment: </span> 
                            Designed UX/UI.
                            Built and developed the frontend system based on requirements
                        </li>
                        <li><span>Team size:</span> 3</li>
                        <li><span>Technologies:</span> 
                            ReactJS
                        </li>
                    </ul>


                    <ul class="project project3">
                        <div class="d-flex dvp">
                            <div class="stt"><p>2</p></div>
                            <p class="tt">Online Courses Program</p>
                        </div>
                        <li><span>Description:</span> 
                            A system is to help learners to watch videos, do homeworks and view scores in their courses.
                        </li>
                        <li><span>Tasks assignment: </span> 
                            Designed UX/UI. 
                            Built and developed the system (both backend and frontend) based on requirements
                        </li>
                        <li><span>Accomplishments: </span> 
                            Learned new Microsoft technologies (.NET Core, T-SQL)
                        </li>
                        <li><span>Team size:</span> 2</li>
                        <li><span>Technologies:</span> 
                            ReactJS, ASP.NET core (Web APIs), MS SQL Server, T-SQL.
                        </li>
                    </ul>


                    <ul class="project project2">
                        <div class="d-flex dvp">
                            <div class="stt"><p>3</p></div>
                            <p class="tt">Customer Relationship Management</p>
                        </div>
                        <li><span>Description:</span> 
                            A system is to manage users, classes, staff's information.
                        </li>                        
                        <li><span>Tasks assignment: </span> 
                            Designed UX/UI
                            Built and developed the system (both Back-end and Front-end) based on requirements
                        </li>
                        <li><span>Accomplishments: </span> 
                            Learned new Microsoft technologies (.NET Core, T-SQL)
                        </li>
                        <li><span>Team size:</span> 2 </li>
                        <li><span>Technologies:</span> 
                            Angular 6, ASP.NET core (Web APIs), MS SQL Server, T-SQL.
                        </li>
                    </ul>



                    <ul class="project project1">
                        <div class="d-flex dvp">
                            <div class="stt"><p>4</p></div>
                            <p class="tt">Courses registeration form</p>
                        </div>
                        <li><span>Description:</span> 
                            A system is to register learners' infomation.
                        </li>                        
                        <li><span>Tasks assignment: </span> 
                            Built the application
                        </li>
                        <li><span>Team size:</span> 2 </li>
                        <li><span>Technologies:</span> 
                            Javascript, Webpack, Face-api library.
                        </li>
                    </ul>



                `
        },
        {
            time: 'Pastimes',
            nameCompany: 'Home',
            position: "Full Stack Developer",
            describtion: `
                <p class="mb-0 in">
                    I often set aside sometimes to pracitce and complete some my projects:
                </>
                <ul>
                    <li> 
                        <a class="link" href="https://english.selflearning.app" target="_blank">Self-Learning English:</a>
                        <span class="des">
                            An elementary app is to help everyone recording their learning process as well as improving their English listening skills.
                            <span class="tech">
                            (NextJS, MongoDB)
                            </span>
                        </span>
                       
                    </li>
                    <li>
                        <a class="link" href="https://dressing.selflearning.app" target="_blank">Dressing Room:</a>
                        <span class="des">
                            A fundamental app is to simulate the woman dressing room.
                            <span class="tech">
                                (ReactJS)
                            </span>
                        </span>
                        
                    </li>
                    <li>
                        <a class="link" href="https://cinema.selflearning.app" target="_blank">Booking Cinema Ticket:</a>
                        <span class="des">
                            An app is to support users booking ticket in the cinema.
                            <span class="tech">
                                (Angular 4)
                            </span>
                        </span>
                        
                    </li>
                    <li>
                        <a class="link" href="https://course.selflearning.app" target="_blank">Course:</a>
                        <span class="des">
                            A small system is to enroll courses before watching videos
                            <span class="tech">
                            (Javascript, Webpack)
                        </span>
                        </span>
                        
                    </li>
                </ul>
            `
        }
    ],

    // porfolio
    porfolio: [
        {
            id: 0,
            name: 'Courses registeration form',
            type: 1,
            des:`
                <div><span>Description:</span> A system is to register learners' infomation.</span></div>
                <div><span>Technologies:</span> HTML5, CSS3, JavaScript, Webpack, Face-api library.</div>
            `,
            url: [
                {
                    src  : 'images/nhaphoc.png',
                    opts : {
                        caption : 'Courses registeration form',
                        thumb: 'images/nhaphoc.png'            
                    }
                },
            ]
        },
        {
            id: 1,
            name: 'Customer Relationship Management',
            type: 1,
            des:`
                <div><span>Description:</span> A system is to manage users, rooms, staff's information.</div>
                <div><span>Technologies:</span> Angular 6, ASP.NET core, MS SQL Server, T-SQL</div>
            `,
            url: [
                {
                    src  : 'images/CRM_KhachHang.png',
                    opts : {
                        caption : 'Customer Page',
                        thumb: 'images/CRM_KhachHang.png'          
                    }
                },
                {
                    src  : 'images/CRM_KhachHang_ThongTinLichHen.png',
                    opts : {
                        caption : `Showed information page for customers' appointment schedule Page`,
                        thumb:  'images/CRM_KhachHang_ThongTinLichHen.png'          
                    }
                },
                {
                    src  : 'images/CRM_LoTrinh.png',
                    opts : {
                        caption : 'Roadmap Page',
                        thumb: 'images/CRM_LoTrinh.png'          
                    }
                },
                {
                    src  : 'images/CRM_LopHoc.png',
                    opts : {
                        caption : 'Class Page',
                        thumb: 'images/CRM_LopHoc.png'          
                    }
                },
                {
                    src  : 'images/CRM_LopHoc_ChamDiem.png',
                    opts : {
                        caption : 'Score Page',
                        thumb: 'images/CRM_LopHoc_ChamDiem.png'          
                    }
                },
                {
                    src  : 'images/CRM_LopHoc_ChiTietBaiTap.png',
                    opts : {
                        caption : 'Detailed Homework Page',
                        thumb: 'images/CRM_LopHoc_ChiTietBaiTap.png'          
                    }
                },
                {
                    src  : 'images/CRM_MonHoc.png',
                    opts : {
                        caption : 'Subject Page',
                        thumb: 'images/CRM_MonHoc.png'          
                    }
                },
                {
                    src  : 'images/CRM_NhomQuyen.png',
                    opts : {
                        caption : 'Role Page',
                        thumb: 'images/CRM_NhomQuyen.png'          
                    }
                },
                {
                    src  : 'images/CRM_THUNGAN2.png',
                    opts : {
                        caption : 'Cashier Page',
                        thumb: 'images/CRM_THUNGAN2.png'          
                    }
                },
                {
                    src  : 'images/CRM_ThuNgan.png',
                    opts : {
                        caption : 'Cashier Page 2',
                        thumb: 'images/CRM_ThuNgan.png'          
                    }
                },
            ]
        },
        {
            id: 2,
            name: 'Online Courses Program',
            type: 1,
            des:`
                <div><span>Description:</span> A system is to help learners to watch videos, do homeworks and view scores in their courses.</div>
                <div><span>Technologies:</span> ReactJS, ASP.NET core, MS SQL Server, T-SQL</div>
            `,
            url: [
                {
                    src  : 'images/BangDiem.png',
                    opts : {
                        caption : 'Score Table Page',
                        thumb: 'images/BangDiem.png'            
                    }
                },
                {
                    src  : 'images/ChiTietBaiHoc.png',
                    opts : {
                        caption : 'Detailed Lessons Page',
                        thumb:  'images/ChiTietBaiHoc.png'          
                    }
                },
                {
                    src  : 'images/ChiTietBaiTap.png',
                    opts : {
                        caption : 'Detailed Homework Page',
                        thumb:  'images/ChiTietBaiTap.png'          
                    }
                },
                {
                    src  : 'images/ChiTietMonHoc.png',
                    opts : {
                        caption : 'Detailed Subjects Page',
                        thumb:  'images/ChiTietMonHoc.png'          
                    }
                },
                {
                    src  : 'images/ChiTietMonHoc_BaiTap.png',
                    opts : {
                        caption : 'Detailed Subject-Homework Page',
                        thumb:  'images/ChiTietMonHoc_BaiTap.png'          
                    }
                },
                {
                    src  : 'images/DanhSachLopHoc.png',
                    opts : {
                        caption : 'Class Page',
                        thumb:  'images/DanhSachLopHoc.png'          
                    }
                },
                {
                    src  : 'images/DanhSachMonHoc.png',
                    opts : {
                        caption : 'Subject Page',
                        thumb:  'images/DanhSachMonHoc.png'          
                    }
                },
            ]
        },
        {
            id: 3,
            name: 'Resume Builder',
            type: 0,
            des:`
                <div><span>Description:</span> An app is to help people to create simple resume after finishing the course.</div>
                <div><span>Technologies:</span> ReactJS </div>
            `,
            url: [
                {
                    src  : 'images/Dashboard.png',
                    opts : {
                        caption : 'Dashboard Page',
                        thumb: 'images/Dashboard.png',          
                    }
                },
                {
                    src  : 'images/CreateCV_Experience.png',
                    opts : {
                        caption : 'Experience',
                        thumb: 'images/CreateCV_Experience.png',          
                    }
                },
                {
                    src  : 'images/CreateCV_JOB.png',
                    opts : {
                        caption : 'Job',
                        thumb: 'images/CreateCV_JOB.png',          
                    }
                },
                {
                    src  : 'images/CreateCV_Project.png',
                    opts : {
                        caption : 'Project',
                        thumb: 'images/CreateCV_Project.png',          
                    }
                },
                {
                    src  : 'images/CreateCV.png',
                    opts : {
                        caption : 'Create CV',
                        thumb: 'images/CreateCV.png',          
                    }
                },
                {
                    src  : 'images/CreateCV_Done.png',
                    opts : {
                        caption : 'Done',
                        thumb: 'images/CreateCV_Done.png',          
                    }
                },
            ]
        }
    ],

    // EDUCATION
    education: [
        // Cybersoft
        {
            time: 'Oct 2018 to Jan 2019',
            name: 'Cybersoft Academy',
            des: 'CERTIFICATE OF FULL STACK DEVELOPER',
        },
        {
            time: 'Apr 2017 to Sep 2018',
            name: 'Cybersoft Academy',
            des: 'CERTIFICATE OF FRONT END DEVELOPER',
        },
        // FPT
        {
            time: 'From 2013 to 2015',
            name: 'FPT Aptech',
            des: 'HIGHER DIPLOMA IN SOFTWARE ENGINEERING',
        }
    ]


}


export default data;

