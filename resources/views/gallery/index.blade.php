<x-guest-layout>


<div class="container w-full px-5 py-6 mx-auto">
<h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center">
    Zdjęcia z naszej restauracji
</h2>
    <div class="grid lg:grid-cols-4 gap-y-6">
        @foreach ($gallery as $gallery)
            <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                <a href="{{ Storage::url($gallery->image) }}" class="gallery-lightbox">
                    <img class="w-full h-48 rounded-md" src="{{ Storage::url($gallery->image) }}" alt="Image" />
                </a>
            </div>
        @endforeach

    </div>
</div>

</x-guest-layout>



      
   