" --- Guidelines for this Vimrc ---
" Start new categories with three leading -'s and three trailing -'s in a comment
" Use three newlines between categories
" Only use marks to retain cursor position if tho mapping does not affect undo history movement-wise (i.e. yanking can keep the cursor pos, as you'd usually not want to undo it)



" --- General ---
cmap w!! w !sudo tee % > /dev/null
set nobackup
set noswapfile
set ignorecase " search is case insensitive
set smartcase " unless I typed uppercase characters
set clipboard+=unnamed
set history=1000

" Disable auto newlines
set formatoptions-=t



" --- UI ---
colo ron
set number
set showcmd
set scrolloff=10



" --- Leader key ---

" Settings
map <space> \
set timeoutlen=850


" Mappings
nnoremap <leader>c ciw
nnoremap <leader>y mqyiw`q
nnoremap <leader>p viwp
nnoremap <leader>o o<esc>k
nnoremap <leader>O O<esc>j

nnoremap <leader><space> /
nnoremap <leader>w :wq!<CR>

" Change inside next <token>
nnoremap <leader>' /'<CR>ci'
nnoremap <leader>" /"<CR>ci"
nnoremap <leader>} /}<CR>ci}
nnoremap <leader>{ /}<CR>ci}
nnoremap <leader>{ /}<CR>ci}
nnoremap <leader>) /)<CR>ci)
nnoremap <leader>( /(<CR>ci)



" --- More natural navigation ---
nnoremap <silent> j :noh<cr>gj
nnoremap <silent> k :noh<cr>gk

nnoremap J }
vnoremap J }

nnoremap K {
vnoremap K {

nnoremap <silent> h h
nnoremap <silent> l l

nnoremap <silent> L $
vnoremap <silent> L $

nnoremap <silent> H ^
vnoremap <silent> H ^

nnoremap <silent> 0 ^



" --- Operator-Pending ---
onoremap p i(
onoremap " i"
onoremap ; t;

onoremap H ^
onoremap L $

"onoremap J 2j
"onoremap K 2j



" --- Get rid of bad habits or unused (and possibly annoying) features ---
nnoremap <F1> <nop>



" --- Misc ---
" Capitalizes a word
inoremap <c-u> <esc>mqviwU`qa

" Move lines around (todo; fix this to work in intellij as well)
nnoremap - ddp
nnoremap _ ddkkp

nnoremap do jdd
nnoremap dO kdd

" 'Undo' line, remove line
nnoremap U dd

" Keep selection after (indent) edits
vnoremap < <gv
vnoremap <s-tab> <gv
vnoremap > >gv
vnoremap <tab> >gv

" Removes the delay
vnoremap <esc> <C-c>

nnoremap < <<
nnoremap > >>

nnoremap ; J
nnoremap m `
nnoremap M m

nnoremap , Yp
vnoremap , yko<esc>kp


" --- IntelliJ IdeaVIM ---
nnoremap gd :action GotoDeclaration<cr>
nnoremap ; :action VimFilePrevious<cr>

nnoremap / :action CommentByLineComment<cr>
vnoremap / <Esc>gvhh:<bs><bs><bs><bs><bs>action VimVisualSwapSelections<cr>:action CommentByLineComment<cr>

nnoremap <leader>q :action CloseContent<cr>
nnoremap <leader>u :action FindUsages<cr>
nnoremap <leader>f :action RecentFiles<cr>
nnoremap <leader>r :action RenameElement<cr>
nnoremap <leader>n :action GotoClass<cr>
nnoremap <leader>N :action GotoFile<cr>
nnoremap <leader>e :action GotoNextError<cr>
nnoremap <leader>E :action GotoPreviousError<cr>
nnoremap <leader>d :action ShowErrorDescription<cr>

nnoremap <leader>, :action PreviousTab<cr>
nnoremap <leader>. :action NextTab<cr>

" --- Config examples ---
"
" http://dougblack.io/words/a-good-vimrc.html#colors
" https://github.com/amix/vimrc
" https://danielmiessler.com/study/vim/#why
" https://github.com/danielmiessler/vim
