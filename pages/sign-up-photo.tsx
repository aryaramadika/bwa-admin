import Image from "next/image"
import { useEffect, useState } from "react"
import { setSignUp } from "../services/auth";
import { ToastContainer, toast } from 'react-toastify';
import router, { useRouter } from "next/router";
export default function SignUpPhoto() {
    const[image, setImage] = useState('');
    const[imgPreview,setImgPreview] = useState(null)
    const [localForm, setLocalForm] = useState({
        name: '',
        email: '',
      });
    const router = useRouter();



      useEffect(() => {
        const getLocalForm = localStorage.getItem('user-form');
        setLocalForm(JSON.parse(getLocalForm!));
      }, []);

    const onSubmit = async () =>{
        const getLocalForm = await localStorage.getItem('user-form');
        const form = JSON.parse(getLocalForm!);
        console.log('image :',image)
        const data = new FormData();

        data.append('image', image);
        data.append('email', form.email);
        data.append('name', form.name);
        data.append('password', form.password);
        data.append('username', form.name);
        data.append('phoneNumber', form.phoneNumber);
        data.append('role', 'user');
        data.append('status', 'Y');

        const result = await setSignUp(data);
        if(result.error){
            toast.error(result.message)
        }else{
            toast.success('Registration Completed')
            router.push('/sign-up-success')
            localStorage.removeItem('user-form')
        }
        // console.log('resul: ', result)
    }
    
    return (
        <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    <div>
                        <div className="mb-20">
                            <div className="image-upload text-center">
                                <label for="avatar">
                                {imgPreview ?
                                <img src={imgPreview} width={120} height={120} className="img-upload" alt ="upload"/>: 
                                <Image src="/icon/upload.svg" width={120} height={120} alt ="upload"/>}
                                
                                

                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" 
                                onChange={(event)=>
                                    {
                                    // console.log(event.target.files)
                                    const img = event.target.files[0]
                                    setImgPreview(URL.createObjectURL(img))
                                    return setImage(img)
                                    }} 
                                />
                            </div>
                        </div>
                        <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                        <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                        <div className="pt-50 pb-50">
                            {/* <label for="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                                Game</label>
                            <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg"
                                aria-label="Favorite Game">
                                <option value="" disabled selected>Select Category</option>
                                <option value="fps">First Person Shoter</option>
                                <option value="rpg">Role Playing Game</option>
                                <option value="arcade">Arcade</option>
                                <option value="sport">Sport</option>
                            </select> */}
                        </div>
                    </div>

                    <div className="button-group d-flex flex-column mx-auto">
                        <button 
                        className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                        href="./sign-up-photo-success.html" 
                        // role="button"
                        type="button"

                        onClick={onSubmit}
                        >Create My Account</button>
                        <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                            role="button">Terms &
                            Conditions</a>
                    </div>
                </div>
            </form>
        </div>
    </section>

    )
}
