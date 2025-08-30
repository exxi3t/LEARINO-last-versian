      // Initialize Swiper
        const swiper = new Swiper('.mySwiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Comment System Data
        let comments = [
            {
                id: 1,
                user: "کاربر ناشناس",
                time: "2 روز پیش",
                text: "فیلم بسیار جذابی بود. بازی بازیگران فوق‌العاده بود!",
                likes: 0,
                dislikes: 0,
                replies: [],
                liked: false,
                disliked: false
            }
        ];

        // Like Percentage Data (Replace with actual data source)
        let likePercentage = 85;
        const likePercentageElement = document.getElementById('likePercentage').querySelector('span');
        likePercentageElement.textContent = likePercentage;

        // Tab Switching
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Like Button Animation
        const likeBtn = document.getElementById('likeBtn');
        const likeEffect = likeBtn.querySelector('.like-effect');
        likeBtn.addEventListener('click', () => {
            likeEffect.classList.add('active');
            setTimeout(() => {
                likeEffect.classList.remove('active');
            }, 800);
            const icon = likeBtn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#e50914';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });

        // Dislike Button Animation
        const dislikeBtn = document.getElementById('dislikeBtn');
        const dislikeEffect = dislikeBtn.querySelector('.dislike-effect');
        dislikeBtn.addEventListener('click', () => {
            dislikeEffect.classList.add('active');
            setTimeout(() => {
                dislikeEffect.classList.remove('active');
            }, 800);
            const icon = dislikeBtn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#e50914';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });

        // Bookmark Button Animation
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        const bookmarkEffect = bookmarkBtn.querySelector('.bookmark-effect');
        bookmarkBtn.addEventListener('click', () => {
            bookmarkEffect.classList.add('active');
            setTimeout(() => {
                bookmarkEffect.classList.remove('active');
            }, 800);
            const icon = bookmarkBtn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#e50914';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });

        // Share Button Animation
        const shareBtn = document.getElementById('shareBtn');
        const shareEffect = shareBtn.querySelector('.share-effect');
        shareBtn.addEventListener('click', () => {
            shareEffect.classList.add('active');
            setTimeout(() => {
                shareEffect.classList.remove('active');
            }, 800);
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const icon = shareBtn.querySelector('i');
                icon.classList.remove('fas');
                icon.classList.add('fas', 'fa-check');
                icon.style.color = '#e50914';
                setTimeout(() => {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-share');
                    icon.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy URL:', err);
            });
        });

        // Play Trailer Button
        const playTrailerBtn = document.getElementById('playTrailer');
        const mainVideo = document.getElementById('mainVideo');
        playTrailerBtn.addEventListener('click', () => {
            if (mainVideo.muted) {
                mainVideo.muted = false;
                playTrailerBtn.innerHTML = 'توقف تریلر <i class="fas fa-pause mr-2"></i>';
            } else {
                mainVideo.muted = true;
                playTrailerBtn.innerHTML = 'پخش تریلر <i class="fas fa-play mr-2"></i>';
            }
        });

        // Floating Comment Button
        const floatingCommentBtn = document.getElementById('floatingCommentBtn');
        floatingCommentBtn.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            document.querySelector('.tab[data-tab="comments"]').classList.add('active');
            document.getElementById('comments').classList.add('active');
            document.getElementById('comments').scrollIntoView({ behavior: 'smooth' });
            document.getElementById('commentInput').focus();
        });

        // Scroll to Bottom Button
        const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');
        scrollToBottomBtn.addEventListener('click', () => {
            const commentList = document.getElementById('commentList');
            commentList.scrollTop = commentList.scrollHeight;
        });

        // Season Selector
        const seasonTabs = document.querySelectorAll('.season-tab');
        seasonTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                seasonTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // Episode Bookmark
        const episodeBookmarks = document.querySelectorAll('.episode-bookmark');
        episodeBookmarks.forEach(bookmark => {
            bookmark.addEventListener('click', (e) => {
                e.stopPropagation();
                if (bookmark.classList.contains('far')) {
                    bookmark.classList.remove('far');
                    bookmark.classList.add('fas');
                    bookmark.style.color = '#e50914';
                } else {
                    bookmark.classList.remove('fas');
                    bookmark.classList.add('far');
                    bookmark.style.color = '#aaa';
                }
            });
        });

        // Comment System
        const commentList = document.getElementById('commentList');
        const commentInput = document.getElementById('commentInput');
        const commentSubmit = document.getElementById('commentSubmit');

        function renderComments() {
            comments.sort((a, b) => b.likes - a.likes);
            commentList.innerHTML = '';
            comments.forEach(comment => {
                const commentItem = document.createElement('div');
                commentItem.className = `comment-item ${comment.replyTo ? 'reply' : ''}`;
                commentItem.setAttribute('data-comment-id', comment.id);
                commentItem.innerHTML = `
                    <div class="comment-avatar"><i class="fas fa-user"></i></div>
                    <div class="comment-content">
                        <div class="comment-user">
                            <span class="comment-user-name">${comment.user}</span>
                            <span class="comment-time">${comment.time}</span>
                        </div>
                        <p class="comment-text">${comment.text}</p>
                        <div class="comment-actions">
                            <div class="comment-like ${comment.liked ? 'liked' : ''}" data-comment-id="${comment.id}">
                                <i class="${comment.liked ? 'fas' : 'far'} fa-thumbs-up"></i>
                                <span>${comment.likes}</span>
                                <div class="like-effect">
                                    <i class="fas fa-thumbs-up" style="color: #e50914;"></i>
                                </div>
                            </div>
                            <div class="comment-dislike ${comment.disliked ? 'disliked' : ''}" data-comment-id="${comment.id}">
                                <i class="${comment.disliked ? 'fas' : 'far'} fa-thumbs-down"></i>
                                <span>${comment.dislikes}</span>
                                <div class="dislike-effect">
                                    <i class="fas fa-thumbs-down" style="color: #e50914;"></i>
                                </div>
                            </div>
                            <div class="comment-reply" data-comment-id="${comment.id}">
                                <i class="fas fa-reply"></i>
                                <span>پاسخ</span>
                            </div>
                        </div>
                        <div class="comment-form-tab reply-form" style="display: none;">
                            <textarea class="comment-input-tab" placeholder="پاسخ خود را بنویسید..."></textarea>
                            <button class="comment-submit-tab">ارسال</button>
                        </div>
                    </div>
                `;
                commentList.appendChild(commentItem);

                if (comment.replies && comment.replies.length > 0) {
                    comment.replies.forEach(reply => {
                        const replyItem = document.createElement('div');
                        replyItem.className = 'comment-item reply';
                        replyItem.setAttribute('data-comment-id', reply.id);
                        replyItem.innerHTML = `
                            <div class="comment-avatar"><i class="fas fa-user"></i></div>
                            <div class="comment-content">
                                <div class="comment-user">
                                    <span class="comment-user-name">${reply.user}</span>
                                    <span class="comment-time">${reply.time}</span>
                                </div>
                                <p class="comment-text">${reply.text}</p>
                                <div class="comment-actions">
                                    <div class="comment-like ${reply.liked ? 'liked' : ''}" data-comment-id="${reply.id}">
                                        <i class="${reply.liked ? 'fas' : 'far'} fa-thumbs-up"></i>
                                        <span>${reply.likes}</span>
                                        <div class="like-effect">
                                            <i class="fas fa-thumbs-up" style="color: #e50914;"></i>
                                        </div>
                                    </div>
                                    <div class="comment-dislike ${reply.disliked ? 'disliked' : ''}" data-comment-id="${reply.id}">
                                        <i class="${reply.disliked ? 'fas' : 'far'} fa-thumbs-down"></i>
                                        <span>${reply.dislikes}</span>
                                        <div class="dislike-effect">
                                            <i class="fas fa-thumbs-down" style="color: #e50914;"></i>
                                        </div>
                                    </div>
                                    <div class="comment-reply" data-comment-id="${reply.id}">
                                        <i class="fas fa-reply"></i>
                                        <span>پاسخ</span>
                                    </div>
                                </div>
                                <div class="comment-form-tab reply-form" style="display: none;">
                                    <textarea class="comment-input-tab" placeholder="پاسخ خود را بنویسید..."></textarea>
                                    <button class="comment-submit-tab">ارسال</button>
                                </div>
                            </div>
                        `;
                        commentList.appendChild(replyItem);
                    });
                }
            });

            document.querySelectorAll('.comment-like').forEach(like => {
                like.addEventListener('click', (e) => {
                    const commentId = parseInt(e.currentTarget.getAttribute('data-comment-id'));
                    const comment = findComment(commentId);
                    if (!comment.liked) {
                        comment.liked = true;
                        comment.likes += 1;
                        if (comment.disliked) {
                            comment.disliked = false;
                            comment.dislikes -= 1;
                        }
                        e.currentTarget.querySelector('.like-effect').classList.add('active');
                        setTimeout(() => {
                            e.currentTarget.querySelector('.like-effect').classList.remove('active');
                        }, 800);
                    } else {
                        comment.liked = false;
                        comment.likes -= 1;
                    }
                    renderComments();
                });
            });

            document.querySelectorAll('.comment-dislike').forEach(dislike => {
                dislike.addEventListener('click', (e) => {
                    const commentId = parseInt(e.currentTarget.getAttribute('data-comment-id'));
                    const comment = findComment(commentId);
                    if (!comment.disliked) {
                        comment.disliked = true;
                        comment.dislikes += 1;
                        if (comment.liked) {
                            comment.liked = false;
                            comment.likes -= 1;
                        }
                        e.currentTarget.querySelector('.dislike-effect').classList.add('active');
                        setTimeout(() => {
                            e.currentTarget.querySelector('.dislike-effect').classList.remove('active');
                        }, 800);
                    } else {
                        comment.disliked = false;
                        comment.dislikes -= 1;
                    }
                    renderComments();
                });
            });

            document.querySelectorAll('.comment-reply').forEach(reply => {
                reply.addEventListener('click', (e) => {
                    const replyForm = e.currentTarget.parentElement.querySelector('.reply-form');
                    replyForm.style.display = replyForm.style.display === 'none' ? 'block' : 'none';
                    replyForm.querySelector('textarea').focus();
                });
            });

            document.querySelectorAll('.reply-form .comment-submit-tab').forEach(submit => {
                submit.addEventListener('click', (e) => {
                    const commentId = parseInt(e.currentTarget.parentElement.parentElement.parentElement.getAttribute('data-comment-id'));
                    const input = e.currentTarget.previousElementSibling;
                    if (input.value.trim()) {
                        const newReply = {
                            id: Date.now(),
                            user: "کاربر ناشناس",
                            time: "اکنون",
                            text: input.value,
                            likes: 0,
                            dislikes: 0,
                            liked: false,
                            disliked: false
                        };
                        const parentComment = comments.find(c => c.id === commentId);
                        if (!parentComment.replies) parentComment.replies = [];
                        parentComment.replies.push(newReply);
                        input.value = '';
                        e.currentTarget.parentElement.style.display = 'none';
                        renderComments();
                        const newReplyElement = commentList.querySelector(`[data-comment-id="${newReply.id}"]`);
                        newReplyElement.classList.add('new-comment');
                        setTimeout(() => {
                            newReplyElement.classList.remove('new-comment');
                        }, 500);
                    }
                });
            });
        }

        function findComment(id) {
            for (let comment of comments) {
                if (comment.id === id) return comment;
                if (comment.replies) {
                    const reply = comment.replies.find(r => r.id === id);
                    if (reply) return reply;
                }
            }
            return null;
        }

        // Submit Comment
        commentSubmit.addEventListener('click', () => {
            if (commentInput.value.trim()) {
                const newComment = {
                    id: Date.now(),
                    user: "کاربر ناشناس",
                    time: "اکنون",
                    text: commentInput.value,
                    likes: 0,
                    dislikes: 0,
                    replies: [],
                    liked: false,
                    disliked: false
                };
                comments.push(newComment);
                commentInput.value = '';
                renderComments();
                const newCommentElement = commentList.querySelector(`[data-comment-id="${newComment.id}"]`);
                newCommentElement.classList.add('new-comment');
                setTimeout(() => {
                    newCommentElement.classList.remove('new-comment');
                }, 500);
                commentList.scrollTop = commentList.scrollHeight;
            }
        });

        // Initial render
        renderComments();