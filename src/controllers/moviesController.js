const swapi=require('../swapi/swapi');
class MoviesController{
    async getAllMovies(req,res,next){
        const response=await swapi.getAllMovies();
        const filmes=response.results;
        let c=1;
        for(let filme of filmes){
            filme.id=c;
            c++;
        }
        return res.render('filmes',{ filmes });
    }
    async showMovie(req,res,next){
        const { id }=req.params;
        const response=await swapi.getMovie(id);
        const filme=response;
        const characters_info=[];
        for(let character_url of filme.characters){
            let id_char=character_url.split('/')[5];
            const response2=await swapi.getAllCharacterInfo(id_char);
            characters_info.push(response2);
        }
        filme.characters_info=characters_info;
        return res.render('filme',{ filme });
    }
}
module.exports=MoviesController;