
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
import { name } from 'file-loader';

const data = {

    // INFO MYSELF
    name: 'Tan Truc Nguyen',
    email: 'trucnguyen2515@gmail.com',
    phone: '(+84)909015594',
    birthday: 'May 15 1994',
    address: 'Go Vap District, Ho Chi Minh City',
    intro: [
        `I am an enthusiastic and passionate Front-end Developer who have 3 years of experience in using Javascript, HTML and CSS. Moreover, I can use some technologies fluently, such as: ReactJS, Angular 2+, Webpack, SCSS, NodeJS (Web APIs), MongoDB.`,
        `Additionally, I always try my best to explore my own capability, challenge my limit by researching and learning new technologies as well as doing some daily projects when I have my leisure time. Finally, I want to raise my voice and climb to the mountain's peak by working in a flexible, multicultural, and active working environment. `
    ],

    // SKILL
    skill: {
        proficient: ["HTML", "CSS", "Javascript"],
        familiar: ["Angular 2","ReactJS" ,"SCSS", "Git"],
        other: ["Time Management", "Task Management"]
    },

    // EXPERIENCE
    experience: [
        {
            time: `April 2021 to June 2022`,
            nameCompany: "Gleads Vietnam",
            position: "Frontend Team Leader",
            describtion: `
                <ul style="list-style-type:disc;padding-left:16px">
                    <li>Managed a 4-member team (Planned, Estimated time, Assigned tasks) to develop CRM (Angular) and Portal (React JS) projects.</li>
                    <li>Developed and Ensured the projects output quality.</li>
                    <li>Migrated the technology of CRM project from Angular to React JS.</li>
                    <li>Using Angular, ReactJS.</li>
                </ul>
            `,
        },
        {
            time: `April 2019 to Feb 2021`,
            nameCompany: "Cybersoft Academy",
            position: "Frontend Web Developer",
            describtion: `
                <ul style="list-style-type:disc;padding-left:16px">
                    <li>Developed an ecosystem, built a couple of websites to manage courses, users' information and employees in the company.</li>
                    <li>Using HTML, CSS, Webpack, Javascript, ReactJS, Angular 6.</li>
                </ul>
            `,
        },
        {
            time: 'Pastimes',
            nameCompany: 'Home',
            position: "Frontend Web Developer",
            describtion: `
                <p class="mb-0 in">
                    I often set aside sometimes to practice and complete some my projects:
                </>
                <ul>
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
            des: `
                <div><span>Description:</span> A system is to register learners' infomation.</span></div>
                <div><span>Technologies:</span> HTML5, CSS3, JavaScript, Webpack, Face-api library.</div>
            `,
            url: [
                {
                    src: 'images/nhaphoc.png',
                    opts: {
                        caption: 'Courses registeration form',
                        thumb: 'images/nhaphoc.png'
                    }
                },
            ]
        },
        {
            id: 1,
            name: 'Customer Relationship Management',
            type: 1,
            des: `
                <div><span>Description:</span> A system is to manage users, rooms, staff's information.</div>
                <div><span>Technologies:</span> Angular 6</div>
            `,
            url: [
                {
                    src: 'images/CRM_KhachHang.png',
                    opts: {
                        caption: 'Customer Page',
                        thumb: 'images/CRM_KhachHang.png'
                    }
                },
                {
                    src: 'images/CRM_KhachHang_ThongTinLichHen.png',
                    opts: {
                        caption: `Showed information page for customers' appointment schedule Page`,
                        thumb: 'images/CRM_KhachHang_ThongTinLichHen.png'
                    }
                },
                {
                    src: 'images/CRM_LoTrinh.png',
                    opts: {
                        caption: 'Roadmap Page',
                        thumb: 'images/CRM_LoTrinh.png'
                    }
                },
                {
                    src: 'images/CRM_LopHoc.png',
                    opts: {
                        caption: 'Class Page',
                        thumb: 'images/CRM_LopHoc.png'
                    }
                },
                {
                    src: 'images/CRM_LopHoc_ChamDiem.png',
                    opts: {
                        caption: 'Score Page',
                        thumb: 'images/CRM_LopHoc_ChamDiem.png'
                    }
                },
                {
                    src: 'images/CRM_LopHoc_ChiTietBaiTap.png',
                    opts: {
                        caption: 'Detailed Homework Page',
                        thumb: 'images/CRM_LopHoc_ChiTietBaiTap.png'
                    }
                },
                {
                    src: 'images/CRM_MonHoc.png',
                    opts: {
                        caption: 'Subject Page',
                        thumb: 'images/CRM_MonHoc.png'
                    }
                },
                {
                    src: 'images/CRM_NhomQuyen.png',
                    opts: {
                        caption: 'Role Page',
                        thumb: 'images/CRM_NhomQuyen.png'
                    }
                },
                {
                    src: 'images/CRM_THUNGAN2.png',
                    opts: {
                        caption: 'Cashier Page',
                        thumb: 'images/CRM_THUNGAN2.png'
                    }
                },
                {
                    src: 'images/CRM_ThuNgan.png',
                    opts: {
                        caption: 'Cashier Page 2',
                        thumb: 'images/CRM_ThuNgan.png'
                    }
                },
            ]
        },
        {
            id: 2,
            name: 'Online Courses Program',
            type: 1,
            des: `
                <div><span>Description:</span> A system is to help learners to watch videos, do homeworks and view scores in their courses.</div>
                <div><span>Technologies:</span> ReactJS</div>
            `,
            url: [
                {
                    src: 'images/BangDiem.png',
                    opts: {
                        caption: 'Score Table Page',
                        thumb: 'images/BangDiem.png'
                    }
                },
                {
                    src: 'images/ChiTietBaiHoc.png',
                    opts: {
                        caption: 'Detailed Lessons Page',
                        thumb: 'images/ChiTietBaiHoc.png'
                    }
                },
                {
                    src: 'images/ChiTietBaiTap.png',
                    opts: {
                        caption: 'Detailed Homework Page',
                        thumb: 'images/ChiTietBaiTap.png'
                    }
                },
                {
                    src: 'images/ChiTietMonHoc.png',
                    opts: {
                        caption: 'Detailed Subjects Page',
                        thumb: 'images/ChiTietMonHoc.png'
                    }
                },
                {
                    src: 'images/ChiTietMonHoc_BaiTap.png',
                    opts: {
                        caption: 'Detailed Subject-Homework Page',
                        thumb: 'images/ChiTietMonHoc_BaiTap.png'
                    }
                },
                {
                    src: 'images/DanhSachLopHoc.png',
                    opts: {
                        caption: 'Class Page',
                        thumb: 'images/DanhSachLopHoc.png'
                    }
                },
                {
                    src: 'images/DanhSachMonHoc.png',
                    opts: {
                        caption: 'Subject Page',
                        thumb: 'images/DanhSachMonHoc.png'
                    }
                },
            ]
        },
        {
            id: 3,
            name: 'Resume Builder',
            type: 0,
            des: `
                <div><span>Description:</span> An app is to help people to create simple resume after finishing the course.</div>
                <div><span>Technologies:</span> ReactJS </div>
            `,
            url: [
                {
                    src: 'images/Dashboard.png',
                    opts: {
                        caption: 'Dashboard Page',
                        thumb: 'images/Dashboard.png',
                    }
                },
                {
                    src: 'images/CreateCV_Experience.png',
                    opts: {
                        caption: 'Experience',
                        thumb: 'images/CreateCV_Experience.png',
                    }
                },
                {
                    src: 'images/CreateCV_JOB.png',
                    opts: {
                        caption: 'Job',
                        thumb: 'images/CreateCV_JOB.png',
                    }
                },
                {
                    src: 'images/CreateCV_Project.png',
                    opts: {
                        caption: 'Project',
                        thumb: 'images/CreateCV_Project.png',
                    }
                },
                {
                    src: 'images/CreateCV.png',
                    opts: {
                        caption: 'Create CV',
                        thumb: 'images/CreateCV.png',
                    }
                },
                {
                    src: 'images/CreateCV_Done.png',
                    opts: {
                        caption: 'Done',
                        thumb: 'images/CreateCV_Done.png',
                    }
                },
            ]
        },
        {
            id: 4,
            name: 'Portal Dashboard',
            type: 0,
            des: `
                <div>
                    <span>Description:</span> A management application to help customer can manage and register services.
                </div>
                <div><span>Technologies:</span> ReactJS </div>
            `,
            url:[
                {
                    src: 'images/bbc_portal_1.png',
                    opts: {
                        caption: 'Dashboard Manage Orders',
                        thumb: 'images/bbc_manage_1.png',
                    }
                },
                {
                    src: 'images/bbc_portal_2.png',
                    opts: {
                        caption: 'Dashboard Manage Service Processes',
                        thumb: 'images/bbc_manage_2.png',
                    }
                }
            ]
        },
        {
            id: 5,
            name: 'CRM Dashboard',
            type: 0,
            des: `
                <div><span>Description:</span> A management application to help CS (customer service) can manage client's information or track customer's service processes
                .</div>
                <div><span>Technologies:</span> Angular </div>
            `,
            url: [
                {
                    src: 'images/bbc_manage_1.png',
                    opts: {
                        caption: 'Dashboard Manage Tasks',
                        thumb: 'images/bbc_manage_1.png',
                    }
                },
                {
                    src: 'images/bbc_manage_2.png',
                    opts: {
                        caption: 'Dashboard Manage customer \'s service processes ',
                        thumb: 'images/bbc_manage_2.png',
                    }
                },
            ]
        }
    ],

    // EDUCATION
    education: [
        // Cybersoft
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

