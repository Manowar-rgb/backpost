import Post from "./post.js"
import fileService from "./fileService.js";

class PostService{
    async create(post, picture){
            const fileName = fileService.saveFile(picture);
            const createdPost = await Post.create({...post, picture: fileName});
            return createdPost;
    }

    async getAll(){
            const posts = await Post.find()
            return posts
    }
    async getOne(id){
            if(!id){
                throw new Error('Id не указан')
            }
            const post = await Post.findById(id)
            return post;
    }
    async update(post){
            if(!_id){
                throw new Error('Id не указан')
            }
            const updatedPost = await Post.findByIdAndUpdate(post.id, post, {new: true})
            return updatedPost
    }
    async delete(id){
            if(!id){
                throw new Error('Id не указан')
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}

export default new PostService()