<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Models\User;
use Illuminate\Container\Attributes\CurrentUser;
use Illuminate\Container\Attributes\RouteParameter;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(#[CurrentUser] User $user)
    {
        $articles = ArticleResource::collection(Article::where('user_id', $user->id)->get());
        return Inertia::render("Articles/page", ["articles" => $articles]);
    }

    public function destroy(#[CurrentUser] User $user, Article $article)
    {
        if ($article->user_id === $user->id) $article->delete();
    }

    public function create()
    {
        return Inertia::render("Articles/Create");
    }

    public function store(StoreArticleRequest $request)
    {
        //
    }

    public function show(Article $article)
    {
        //
    }

    public function edit(Article $article)
    {
        //
    }

    public function update(UpdateArticleRequest $request, Article $article)
    {
        //
    }
}
