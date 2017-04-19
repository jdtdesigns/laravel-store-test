<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function get()
    {
    	$posts = Post::all();
    	$response = [
    		'posts' => $posts
    	];

    	return response()->json($response, 200);
    }
}
