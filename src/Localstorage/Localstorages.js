const AddLocalstorage = id => {
    const exists = localStorage.getItem('Course-Cart');
    let CourseCart = {};
    if(exists)
    {
        CourseCart = JSON.parse(exists);
        if(CourseCart[id])
        {
            const newid = CourseCart[id] + 1;
            CourseCart[id] = newid

        }
        else{
            CourseCart[id] = 1;
        }
         
    }
    else{
        CourseCart[id] = 1
    }
    const NewCourseCart = JSON.stringify(CourseCart)
    localStorage.setItem('Course-Cart', NewCourseCart)
    
}
const RemoveItemLocalstorage = id => {
    const exists = localStorage.getItem('Course-Cart');
    let CourseCart = {};
    if(!exists)
    {
      return;
         
    }
    else{
        
        CourseCart = JSON.parse(exists);
        if(CourseCart[id])
        {
            delete CourseCart[id]
            const NewCourseCart = JSON.stringify(CourseCart)
            localStorage.setItem('Course-Cart', NewCourseCart)
        }
        else{
            return
        }
    }
    
}
const GetitemFromLocalStorage = () => {
    const exists = localStorage.getItem('Course-Cart');
    return exists ? JSON.parse(exists) : null
}
const ClearTheLocalStorage = () => {
    localStorage.removeItem('Course-Cart');
}
export {GetitemFromLocalStorage,ClearTheLocalStorage,AddLocalstorage,RemoveItemLocalstorage}