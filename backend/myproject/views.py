# views.py (Django Backend)
from django.http import JsonResponse

def get_playlists(request):
    playlists = [
        {"title": "Bollywood Hits", "image": "/placeholder.svg"},
        {"title": "Romantic Melodies", "image": "/placeholder.svg"},
        {"title": "Upbeat Anthems", "image": "/placeholder.svg"},
        {"title": "Retro Classics", "image": "/placeholder.svg"},
    ]
    return JsonResponse(playlists, safe=False)

def get_songs(request):
    songs = [
        {"title": "Dil Bole Hadippa", "artist": "Sunidhi Chauhan, Sukhwinder Singh", "album": "Dil Bole Hadippa", "image": "/placeholder.svg"},
        {"title": "Dhoom Machale", "artist": "Sunidhi Chauhan, Sukhwinder Singh", "album": "Dhoom", "image": "/placeholder.svg"},
        {"title": "Chittiyaan Kalaiyaan", "artist": "Meet Bros, Kanika Mann", "album": "Roy", "image": "/placeholder.svg"},
        {"title": "Galliyan", "artist": "Ankit Tiwari", "album": "Ek Villain", "image": "/placeholder.svg"},
    ]
    return JsonResponse(songs, safe=False)
