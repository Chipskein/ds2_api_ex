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
        const filme=await swapi.getMovie(id);
        const characters_info=[];
        if(filme){
            for(let character_url of filme.characters){
                let id_char=character_url.split('/')[5];
                const ch_info=await swapi.getAllCharacterInfo(id_char);
                characters_info.push(ch_info);
            }
            filme.characters_info=characters_info;
        }
        return res.render('filme',{ filme });
    }
}
module.exports=MoviesController;