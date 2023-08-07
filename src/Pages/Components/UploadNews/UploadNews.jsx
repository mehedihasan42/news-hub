import React from 'react';
import { useForm } from 'react-hook-form';

const UploadNews = () => {
    const {
        register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="hero min-h-screen">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                {...register("title", { required: true })}
                                type="text" placeholder="Title" className="input input-bordered" />
                            {errors.title && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                {...register("description", { required: true })}
                                type="text" placeholder="Description" className="input input-bordered" />
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
                            <select {...register("category_id")}>
                                <option value="1">Breaking News</option>
                                <option value="2">Regular News</option>
                                <option value="3">International News</option>
                                <option value="4">Sports</option>
                                <option value="5">Entertainment</option>
                                <option value="7">Arts</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-neutral" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadNews;