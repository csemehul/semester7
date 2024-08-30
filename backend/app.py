# app.py (Flask Backend)
from flask import Flask, jsonify

app = Flask(__name__)

# Example route to fetch playlists data
@app.route('/api/playlists')
def get_playlists():
    playlists = [
        {"title": "Bollywood Hits", "image": "/placeholder.svg"},
        {"title": "Romantic Melodies", "image": "/placeholder.svg"},
        {"title": "Upbeat Anthems", "image": "/placeholder.svg"},
        {"title": "Retro Classics", "image": "/placeholder.svg"},
    ]
    return jsonify(playlists)

# Example route to fetch songs data
@app.route('/api/songs')
def get_songs():
    songs = [
        {"title": "Dil Bole Hadippa", "artist": "Sunidhi Chauhan, Sukhwinder Singh", "album": "Dil Bole Hadippa", "image": "/placeholder.svg"},
        {"title": "Dhoom Machale", "artist": "Sunidhi Chauhan, Sukhwinder Singh", "album": "Dhoom", "image": "/placeholder.svg"},
        {"title": "Chittiyaan Kalaiyaan", "artist": "Meet Bros, Kanika Mann", "album": "Roy", "image": "/placeholder.svg"},
        {"title": "Galliyan", "artist": "Ankit Tiwari", "album": "Ek Villain", "image": "/placeholder.svg"},
    ]
    return jsonify(songs)

if __name__ == '__main__':
    app.run(debug=True)
