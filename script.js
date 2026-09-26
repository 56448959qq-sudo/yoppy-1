        // --- 1. アプリのデータ（ミッションリスト） ---
        // targetStage: 'teen'(中高生), 'college'(大学生), 'adult'(社会人), 'all'(全員)
        // targetGender: 'female'(女性), 'male'(男性), 'all'(全員/その他)
        const missions = [
            // 【全員共通】
            { id: 1, text: "地域の挨拶運動：すれ違う人に挨拶をしてみる", desc: "小さなコミュニケーションが、誰かの孤立感を和らげる第一歩になります。", icon: "fa-comments", points: 10, targetStage: ['all'], targetGender: ['all'] },
            { id: 2, text: "離れて暮らす家族や親戚に短いメッセージを送る", desc: "「元気？」の一言が、つながりを感じるきっかけになります。", icon: "fa-mobile-screen", points: 10, targetStage: ['all'], targetGender: ['all'] },
            { id: 3, text: "高齢者の方に席を譲る、またはドアを開けてあげる", desc: "世代を超えた温かい配慮が、暮らしやすいコミュニティを作ります。", icon: "fa-person-cane", points: 10, targetStage: ['all'], targetGender: ['all'] },
            { id: 9, text: "今日あった「良かったこと」を誰かにシェアする", desc: "ポジティブな感情の共有は、周りの人の幸福度（ウェルビーイング）も高めます。", icon: "fa-face-smile-beam", points: 10, targetStage: ['all'], targetGender: ['all'] },
            { id: 10, text: "自分とは異なる意見や背景を持つ人の話を最後まで聞く", desc: "多様な価値観を受容する「寛容性」を育むための第一歩です。", icon: "fa-ear-listen", points: 15, targetStage: ['all'], targetGender: ['all'] },

            // 【中高生・大学生向け】
            { id: 11, text: "学校で、普段あまり話さないクラスメイトに声をかける", desc: "学校内の小さな孤立を防ぎ、居心地の良いクラスを作ります。", icon: "fa-school", points: 15, targetStage: ['teen'], targetGender: ['all'] },
            { id: 12, text: "SNSで、誰かの投稿にポジティブで優しいコメントを残す", desc: "オンライン上のウェルビーイングを高め、誹謗中傷を防ぐ一歩になります。", icon: "fa-heart", points: 10, targetStage: ['teen', 'college'], targetGender: ['all'] },
            { id: 13, text: "「進路」や「将来」について、友達と多様な選択肢があることを話す", desc: "「こうあるべき」という無意識のプレッシャー（偏見）を減らします。", icon: "fa-map-signs", points: 15, targetStage: ['teen', 'college'], targetGender: ['all'] },

            // 【社会人向け】
            { id: 14, text: "職場で育休や時短勤務をしている同僚に、ねぎらいの言葉をかける", desc: "子育てと仕事の両立を応援し、働きやすい環境を作ります。", icon: "fa-briefcase", points: 15, targetStage: ['adult'], targetGender: ['all'] },
            { id: 15, text: "後輩や同僚の意見を否定せずに、まずは「いいね」と受け入れる", desc: "心理的安全性を高め、職場のウェルビーイングを向上させます。", icon: "fa-handshake-angle", points: 15, targetStage: ['adult'], targetGender: ['all'] },
            { id: 16, text: "家事や育児の分担について、家族とポジティブに話す", desc: "協力し合うことで、家庭内のウェルビーイングが高まります。", icon: "fa-house-user", points: 15, targetStage: ['adult'], targetGender: ['all'] },

            // 【女性の健康・ボディイメージ・偏見の解消】
            { id: 6, text: "SNSで「見た目」に関する否定的な発言をしない", desc: "ルッキズム（外見至上主義）への偏見をなくし、多様な美しさを尊重しましょう。", icon: "fa-ban", points: 10, targetStage: ['all'], targetGender: ['all'] },
            { id: 7, text: "自分自身の体を労わる時間（リラックス等）を5分作る", desc: "心身の健康（特に女性特有の健康課題）に向き合い、自分を大切にする時間です。", icon: "fa-spa", points: 10, targetStage: ['all'], targetGender: ['female', 'all'] },
            
            // 【男性向け・ジェンダーバイアス】
            { id: 8, text: "「男だから/女だから」という言葉を使わずに会話する", desc: "無意識のジェンダーバイアス（偏見）に気づき、多様性を認め合うアクションです。", icon: "fa-venus-mars", points: 15, targetStage: ['all'], targetGender: ['all'] },
            { id: 17, text: "「男らしさ」に縛られず、自分の弱さや悩みを信頼できる人に話す", desc: "「強くいなければ」という男性特有の孤独感やプレッシャーを和らげる大切な一歩です。", icon: "fa-user-shield", points: 15, targetStage: ['teen', 'college', 'adult'], targetGender: ['male'] },

            // 【子育て世代への支援・寛容性】
            { id: 4, text: "電車や街で、子供連れの人に温かい眼差しを向ける", desc: "子育てのプレッシャーを感じている人に、安心感を与えることができます。", icon: "fa-baby", points: 10, targetStage: ['all'], targetGender: ['all'] }
        ];

        const optionalMissions = [
            { id: 101, text: "身近な場所のゴミを1つ拾う", desc: "小さな行動で、みんなが気持ちよく過ごせる場所をつくります。", icon: "fa-recycle", points: 5 },
            { id: 102, text: "誰かの良いところを見つけて伝える", desc: "温かい言葉を贈ると、自分も相手も前向きな気持ちになれます。", icon: "fa-heart", points: 5 },
            { id: 103, text: "使っていない照明を消して節電する", desc: "身近なエコアクションから、持続可能な暮らしを始めましょう。", icon: "fa-lightbulb", points: 5 }
        ];

        const leaderboardParticipants = [
            { name: "みどりさん", points: 120, icon: "🌱" },
            { name: "ひなたさん", points: 95, icon: "☀️" },
            { name: "そらさん", points: 80, icon: "🌈" },
            { name: "あおいさん", points: 60, icon: "🌿" }
        ];

        // --- 2. 状態管理 (In-Memory State for simple version) ---
        let appState = {
            totalPoints: 0,
            lastPlayedDate: null, // 'YYYY-MM-DD'
            currentMissionId: null,
            history: [], // [{date: 'YYYY-MM-DD', missionId: 1, text: "...", points: 10}]
            optionalHistory: [], // [{date: 'YYYY-MM-DD', missionId: 101, text: "...", points: 5}]
            profile: null // { stage: 'teen', gender: 'male' }
        };

        // --- 3. DOM要素の取得 ---
        const splashScreen = document.getElementById('splashScreen');
        const profileScreen = document.getElementById('profileScreen');
        const mainScreen = document.getElementById('mainScreen');
        const userStageSelect = document.getElementById('userStage');
        const userGenderSelect = document.getElementById('userGender');
        const saveProfileBtn = document.getElementById('saveProfileBtn');
        const resetProfileBtn = document.getElementById('resetProfileBtn');
        
        const totalPointsEl = document.getElementById('totalPoints');
        const dateDisplayEl = document.getElementById('dateDisplay');
        const headerCountdownTimerEl = document.getElementById('headerCountdownTimer');
        const headerNextMissionTimeEl = document.getElementById('headerNextMissionTime');
        const missionTextEl = document.getElementById('missionText');
        const missionDescEl = document.getElementById('missionDesc');
        const missionIconEl = document.getElementById('missionIcon');
        const completeBtn = document.getElementById('completeBtn');
        const completedOverlay = document.getElementById('completedOverlay');
        const optionalMissionsSection = document.getElementById('optionalMissionsSection');
        const optionalMissionsList = document.getElementById('optionalMissionsList');
        const leaderboardList = document.getElementById('leaderboardList');
        const yourRankEl = document.getElementById('yourRank');
        const rankPointsEl = document.getElementById('rankPoints');
        const rankDifferenceEl = document.getElementById('rankDifference');
        const historyListEl = document.getElementById('historyList');
        const emptyHistoryEl = document.getElementById('emptyHistory');

        // --- 4. アプリの初期化とロジック ---

        function initApp() {
            loadState();
            
            if (!appState.profile) {
                // プロフィール未設定の場合は設定画面を表示
                profileScreen.classList.remove('hidden');
                mainScreen.classList.add('hidden');
            } else {
                // 設定済みの場合はメイン画面を表示
                profileScreen.classList.add('hidden');
                mainScreen.classList.remove('hidden');
                
                // 選択された値をフォームに反映させておく
                userStageSelect.value = appState.profile.stage;
                userGenderSelect.value = appState.profile.gender;
                saveProfileBtn.disabled = false;

                updateDateDisplay();
                checkDailyMission();
                renderPoints();
                renderLeaderboard();
                renderHistory();
            }
        }

        // フォーム入力時のボタン有効化
        userStageSelect.addEventListener('change', () => {
            saveProfileBtn.disabled = !userStageSelect.value;
        });

        // プロフィールを保存してはじめる
        saveProfileBtn.addEventListener('click', () => {
            if (!userStageSelect.value) return;

            appState.profile = {
                stage: userStageSelect.value,
                gender: userGenderSelect.value
            };
            
            // プロフィールを変えた場合は新しい属性でミッションを引き直すためリセット
            appState.lastPlayedDate = null; 
            appState.currentMissionId = null;
            saveState();
            
            // 画面切り替えとメイン処理の実行
            profileScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            updateDateDisplay();
            checkDailyMission();
            renderPoints();
            renderHistory();
        });

        // プロフィール変更ボタン
        resetProfileBtn.addEventListener('click', () => {
            if(confirm("属性を変更すると、今日のミッションが新しくなる場合があります。変更しますか？")) {
                profileScreen.classList.remove('hidden');
                mainScreen.classList.add('hidden');
            }
        });

        function loadState() {
            const savedState = localStorage.getItem('socialGoodAppState');
            if (savedState) {
                appState = { ...appState, ...JSON.parse(savedState) };
            }
        }

        function saveState() {
            localStorage.setItem('socialGoodAppState', JSON.stringify(appState));
        }

        // 今日の日付を取得 (YYYY-MM-DD)
        function getTodayString() {
            const today = new Date();
            // JST (日本時間) を考慮したい場合は、タイムゾーンを調整するなどの処理が必要ですが、
            // 今回はブラウザのローカル時間を使用します。
            return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        }

        function updateDateDisplay() {
            const today = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
            dateDisplayEl.textContent = today.toLocaleDateString('ja-JP', options);
        }

        function getNextMissionDate() {
            const nextMissionDate = new Date();
            nextMissionDate.setHours(24, 0, 0, 0);
            return nextMissionDate;
        }

        function updateCountdown() {
            const now = new Date();
            const nextMissionDate = getNextMissionDate();
            const remainingMilliseconds = Math.max(0, nextMissionDate - now);
            const totalSeconds = Math.floor(remainingMilliseconds / 1000);
            const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const seconds = String(totalSeconds % 60).padStart(2, '0');

            const countdownText = `${hours}:${minutes}:${seconds}`;
            const nextMissionText = `明日 00:00 に更新`;
            headerCountdownTimerEl.textContent = countdownText;
            headerNextMissionTimeEl.textContent = nextMissionText;

            if (remainingMilliseconds === 0) {
                updateDateDisplay();
                checkDailyMission();
            }
        }

        // 毎日異なるミッションを設定するか、既にクリアしているかチェック
        function checkDailyMission() {
            const todayStr = getTodayString();
            
            // 日付が変わっているか、または初めてのプレイ（プロフ変更直後など）の場合
            if (appState.lastPlayedDate !== todayStr || !appState.currentMissionId) {
                
                // ユーザーの属性を取得
                const userStage = appState.profile ? appState.profile.stage : 'all';
                const userGender = appState.profile ? appState.profile.gender : 'all';

                // 属性に合致するミッションをフィルタリング
                const suitableMissions = missions.filter(m => {
                    const matchStage = m.targetStage.includes('all') || m.targetStage.includes(userStage);
                    const matchGender = m.targetGender.includes('all') || m.targetGender.includes(userGender);
                    return matchStage && matchGender;
                });

                // フィルタリングされた中からランダムに選ぶ
                const missionPool = suitableMissions.length > 0 ? suitableMissions : missions;
                const randomMission = missionPool[Math.floor(Math.random() * missionPool.length)];
                
                appState.currentMissionId = randomMission.id;
                
                const hasCompletedToday = appState.history.some(h => h.date === todayStr);
                
                if (hasCompletedToday) {
                     showCompletedState();
                } else {
                     showMission(randomMission);
                }
            } else {
                // 今日すでにクリア済みの場合、または未クリアのままアプリを開き直した場合
                const hasCompletedToday = appState.history.some(h => h.date === todayStr);
                if (hasCompletedToday) {
                    showCompletedState();
                } else {
                    const currentMission = getMissionById(appState.currentMissionId);
                    showMission(currentMission);
                }
            }
        }

        function getMissionById(id) {
            return missions.find(m => m.id === id) || missions[0];
        }

        function showMission(mission) {
            missionTextEl.textContent = mission.text;
            missionDescEl.textContent = mission.desc;
            
            // アイコンのクラスをリセットして再設定
            missionIconEl.className = `fa-solid ${mission.icon} text-6xl text-orange-400 mb-6`;
            
            completeBtn.querySelector('span').textContent = `ミッション達成！ (+${mission.points}pts)`;
            
            completedOverlay.classList.add('hidden');
            completeBtn.disabled = false;
            optionalMissionsSection.classList.add('hidden');
        }

        function showCompletedState() {
            completedOverlay.classList.remove('hidden');
            completeBtn.disabled = true;
            renderOptionalMissions();
        }

        function renderOptionalMissions() {
            const todayStr = getTodayString();
            const hasCompletedToday = appState.history.some(item => item.date === todayStr);

            optionalMissionsSection.classList.toggle('hidden', !hasCompletedToday);
            if (!hasCompletedToday) return;

            optionalMissionsList.innerHTML = '';
            optionalMissions.forEach(mission => {
                const isCompleted = appState.optionalHistory.some(item =>
                    item.date === todayStr && item.missionId === mission.id
                );
                const article = document.createElement('article');
                article.className = `optional-mission-card ${isCompleted ? 'is-completed opacity-70' : ''} bg-white p-4 rounded-2xl border ${isCompleted ? 'border-green-200' : 'border-pink-100'} flex items-center gap-3`;
                article.innerHTML = `
                    <div class="${isCompleted ? 'bg-green-100' : 'bg-pink-100'} p-3 rounded-xl shrink-0">
                        <i class="fa-solid ${isCompleted ? 'fa-check text-green-600' : mission.icon + ' text-pink-500'}"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-bold text-gray-700">${mission.text}</p>
                        <p class="text-xs text-gray-500 mt-1">${mission.desc}</p>
                    </div>
                    <button class="${isCompleted ? 'bg-gray-100 text-gray-500 cursor-default' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'} text-xs font-bold px-3 py-2 rounded-full shrink-0" data-optional-mission-id="${mission.id}" ${isCompleted ? 'disabled' : ''}>
                        ${isCompleted ? '達成済み' : `達成 +${mission.points}pt`}
                    </button>
                `;
                optionalMissionsList.appendChild(article);
            });
        }

        function renderPoints() {
            // アニメーション効果のために、少しずつカウントアップさせることも可能です。
            totalPointsEl.textContent = appState.totalPoints;
            renderLeaderboard();
        }

        function renderLeaderboard() {
            const entries = [
                ...leaderboardParticipants,
                { name: "あなた", points: appState.totalPoints, icon: "★", isYou: true }
            ].sort((a, b) => b.points - a.points);
            const yourRank = entries.findIndex(entry => entry.isYou) + 1;
            const nextEntry = entries[yourRank - 2];

            yourRankEl.textContent = `${yourRank}位`;
            rankPointsEl.textContent = appState.totalPoints;
            rankDifferenceEl.textContent = nextEntry
                ? `あと ${nextEntry.points - appState.totalPoints}pt で${yourRank - 1}位`
                : "トップのポイントです";

            const visibleEntries = yourRank <= 5
                ? entries.slice(0, 5)
                : [...entries.slice(0, 4), entries[yourRank - 1]];
            leaderboardList.innerHTML = visibleEntries.map((entry, index) => `
                <div class="leaderboard-row ${entry.isYou ? 'is-you' : ''}">
                    <span class="leaderboard-rank">${entry.isYou ? yourRank : entries.indexOf(entry) + 1}</span>
                    <span class="leaderboard-avatar">${entry.icon}</span>
                    <span class="flex-1 text-sm font-bold text-gray-700">${entry.name}${entry.isYou ? '（あなた）' : ''}</span>
                    <span class="text-sm font-bold text-orange-600">${entry.points} pts</span>
                </div>
            `).join('');
        }

        function renderHistory() {
            historyListEl.innerHTML = '';
            
            if (appState.history.length === 0) {
                historyListEl.appendChild(emptyHistoryEl);
                emptyHistoryEl.style.display = 'block';
                return;
            }

            emptyHistoryEl.style.display = 'none';

            // 最新の履歴から表示 (最大5件など制限しても良い)
            const recentHistory = [...appState.history].reverse().slice(0, 5);

            recentHistory.forEach(item => {
                const li = document.createElement('li');
                li.className = 'flex justify-between items-center bg-white p-3 rounded-lg border border-orange-100';
                li.innerHTML = `
                    <div class="flex items-center">
                        <div class="bg-green-100 p-2 rounded-full mr-3">
                            <i class="fa-solid fa-check text-green-600 text-sm"></i>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-700">${item.text}</p>
                            <p class="text-xs text-gray-400">${item.date}</p>
                        </div>
                    </div>
                    <span class="font-bold text-orange-600 text-sm">+${item.points}</span>
                `;
                historyListEl.appendChild(li);
            });
        }

        // --- 5. イベントリスナー ---

        completeBtn.addEventListener('click', () => {
            const todayStr = getTodayString();
            const currentMission = getMissionById(appState.currentMissionId);

            // 状態の更新
            appState.totalPoints += currentMission.points;
            appState.lastPlayedDate = todayStr; // 今日クリアしたことを記録
            
            appState.history.push({
                date: todayStr,
                missionId: currentMission.id,
                text: currentMission.text,
                points: currentMission.points
            });

            saveState();

            // UIの更新とエフェクト
            createConfetti();
            
            // 少し遅らせて画面を切り替える
            setTimeout(() => {
                renderPoints();
                renderHistory();
                showCompletedState();
            }, 800);
        });

        optionalMissionsList.addEventListener('click', event => {
            const button = event.target.closest('[data-optional-mission-id]');
            if (!button) return;

            const mission = optionalMissions.find(item => item.id === Number(button.dataset.optionalMissionId));
            const todayStr = getTodayString();
            if (!mission || !appState.history.some(item => item.date === todayStr)) return;
            if (appState.optionalHistory.some(item => item.date === todayStr && item.missionId === mission.id)) return;

            appState.totalPoints += mission.points;
            appState.optionalHistory.push({
                date: todayStr,
                missionId: mission.id,
                text: mission.text,
                points: mission.points
            });
            saveState();
            renderPoints();
            renderOptionalMissions();
            renderHistory();
            createConfetti();
        });

        // --- 6. 紙吹雪エフェクト (おまけ) ---
        function createConfetti() {
            const colors = ['#34d399', '#fbbf24', '#f87171', '#60a5fa', '#a78bfa'];
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // ランダムな位置、色、アニメーション遅延を設定
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                
                document.body.appendChild(confetti);

                // アニメーション終了後に要素を削除
                setTimeout(() => {
                    confetti.remove();
                }, 3500);
            }
        }

        // アプリ起動
        const splashStartedAt = Date.now();
        window.addEventListener('load', () => {
            const minimumSplashTime = 800;
            const remainingTime = Math.max(0, minimumSplashTime - (Date.now() - splashStartedAt));

            setTimeout(() => {
                initApp();
                updateCountdown();
                setInterval(updateCountdown, 1000);
                splashScreen.classList.add('is-hidden');
            }, remainingTime);
        }, { once: true });
