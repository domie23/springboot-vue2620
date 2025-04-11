const base = {
    get() {
        return {
            url : "http://localhost:8080/xueshengkaoshi/",
            name: "xueshengkaoshi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xueshengkaoshi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生在线考试系统"
        } 
    }
}
export default base
