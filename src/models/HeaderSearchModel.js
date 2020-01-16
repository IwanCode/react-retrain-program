class HeaderSearchModel {
    constructor(data) {
        this.poster_path = data.poster_path || null;
        this.adult = data.adult || null;
        this.overview = data.overview || null;
        this.release_date = data.release_date || null;
        this.original_title = data.original_title || null;
        this.genre_ids = data.genre_ids || null;
        this.id = data.id || null;
        this.original_language = data.original_language || null;
        this.title = data.title || null;
        this.backdrop_path = data.backdrop_path || null;
        this.popularity = data.popularity || null;
        this.vote_count = data.vote_count || null;
        this.video = data.video || null;
        this.vote_average = data.vote_average || null;
        this.media_type = data.media_type || null;
        this.first_air_date = data.first_air_date || null;
        this.origin_country = data.origin_country || null;
        this.name = data.name || null;
        this.original_name = data.original_name || null;
        this.known_for = data.known_for || null;
    }
}

export { HeaderSearchModel as default }