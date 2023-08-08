import React from 'react';
import { useForm } from 'react-hook-form';

const UploadNews = () => {

    const {
        register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const newsData = { title: data.title, details: data.description, category_id: data.category_id, image_url: data.photo }
        fetch("https://news-hub-server-beta.vercel.app/news", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                {...register("title", { required: true })}
                                type="text" placeholder="Title" className="input input-bordered input-lg" />
                            {errors.title && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                {...register("description", { required: true })}
                                type="text" placeholder="Description" className="input input-bordered input-lg" />
                            {errors.description && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                {...register("photo", { required: true })}
                                type="text" placeholder="Image URL" className="input input-bordered" />
                            {errors.photo && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Category</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("category_id")}>
                            <option disabled selected>Choose a category</option>
                                <option value="1">Breaking News</option>
                                <option value="2">Regular News</option>
                                <option value="3">International News</option>
                                <option value="4">Sports</option>
                                <option value="5">Entertainment</option>
                                <option value="7">Arts</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-neutral" type="submit" value="Upload" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadNews;