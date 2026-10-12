        // --- 1. アプリのデータ（ミッションリスト） ---
        // targetStage: 'teen'(中高生), 'youngAdult'(20代〜30代), 'adult'(社会人), 'midlife'(40代〜50代), 'all'(全員)
        // targetGender: 'female'(女性), 'male'(男性), 'all'(全員/その他)
        const missions = [
            // 【全員共通】
            { id: 1, text: "地域の挨拶運動：すれ違う人に挨拶をしてみる", desc: "小さなコミュニケーションが、誰かの孤立感を和らげる第一歩になります。", icon: "fa-comments", targetStage: ['all'], targetGender: ['all'] },
            { id: 2, text: "離れて暮らす家族、親戚、または知人に短いメッセージを送る", desc: "「元気？」の一言が、つながりを感じるきっかけになります。", icon: "fa-mobile-screen", targetStage: ['all'], targetGender: ['all'] },
            { id: 3, text: "yoppyをまだ使っていない人に勧める", desc: "みんなでユーザー数を増やそう！", icon: "fa-person-cane", targetStage: ['all'], targetGender: ['all'] },
            { id: 9, text: "今日あった「良かったこと」を誰かにシェアする", desc: "ポジティブな感情の共有は、周りの人の幸福度（ウェルビーイング）も高めます。", icon: "fa-face-smile-beam", targetStage: ['all'], targetGender: ['all'] },
            { id: 10, text: "自分とは異なる意見や背景を持つ人の話を最後まで聞く", desc: "多様な価値観を受容する「寛容性」を育むための第一歩です。", icon: "fa-ear-listen", targetStage: ['all'], targetGender: ['all'] },

            // 【中高生・20代〜30代向け】
            { id: 11, text: "学校で、普段あまり話さないクラスメイトに声をかける", desc: "学校内の小さな孤立を防ぎ、居心地の良いクラスを作ります。", icon: "fa-school", targetStage: ['teen'], targetGender: ['all'] },
            { id: 12, text: "SNSで見た情報を1つファクトチェックする", desc: "オンライン上で広がる無意識な変更の対策になります。", icon: "fa-heart", targetStage: ['teen', 'youngAdult'], targetGender: ['all'] },
            { id: 13, text: "地域の高齢者に元気に挨拶する", desc: "世代を超えた温かい配慮が、暮らしやすいコミュニティを作ります。", icon: "fa-map-signs", targetStage: ['teen', 'youngAdult'], targetGender: ['all'] },

            // 【社会人向け】
            { id: 14, text: "職場で育休や時短勤務をしている同僚に、ねぎらいの言葉をかける", desc: "子育てと仕事の両立を応援し、働きやすい環境を作ります。", icon: "fa-briefcase", targetStage: ['adult'], targetGender: ['all'] },
            { id: 15, text: "後輩や同僚の意見を否定せずに、まずは「いいね」と受け入れる", desc: "心理的安全性を高め、職場のウェルビーイングを向上させます。", icon: "fa-handshake-angle", targetStage: ['adult'], targetGender: ['all'] },
            { id: 16, text: "家事や育児の分担について、家族とポジティブに話す", desc: "協力し合うことで、家庭内のウェルビーイングが高まります。", icon: "fa-house-user", targetStage: ['adult'], targetGender: ['all'] },

            // 【全員向け：ボディイメージ】
            { id: 6, text: "SNSで「見た目」に関する否定的な発言をしない", desc: "ルッキズム（外見至上主義）への偏見をなくし、多様な美しさを尊重しましょう。", icon: "fa-ban", targetStage: ['all'], targetGender: ['all'] },

            // 【女性向け：健康】
            { id: 7, text: "自分自身の体を労わる時間（リラックス等）を5分作る", desc: "心身の健康（特に女性特有の健康課題）に向き合い、自分を大切にする時間です。", icon: "fa-spa", targetStage: ['all'], targetGender: ['female'] },
            { id: 21, text: "女性の健康について、「今の自分が知りたいことは何だろう？」と考えてみる", desc: "気になることを振り返り、必要なら信頼できる情報源や医療専門職に相談するきっかけにしましょう。", icon: "fa-circle-question", targetStage: ['all'], targetGender: ['female'] },
            
            // 【男性向け・ジェンダーバイアス】
            { id: 8, text: "「男だから/女だから」という言葉を使わずに会話する", desc: "無意識のジェンダーバイアス（偏見）に気づき、多様性を認め合うアクションです。", icon: "fa-venus-mars", targetStage: ['all'], targetGender: ['all'] },
            { id: 17, text: "自分の悩みを信頼できる人に話す", desc: "「強くいなければ」という男性特有の孤独感やプレッシャーを和らげる大切な一歩です。", icon: "fa-user-shield", targetStage: ['teen', 'youngAdult', 'adult', 'midlife'], targetGender: ['male'] },

            // 【ミドル世代向け：フレイル予防】
            { id: 18, text: "今日は10分歩いてみる", desc: "無理のない範囲で体を動かす習慣が、将来の健康づくりにつながります。", icon: "fa-person-walking", targetStage: ['midlife'], targetGender: ['all'] },
            { id: 19, text: "近所の人と一言会話する", desc: "身近な人とのつながりを保つことも、心身の健康を支える大切な一歩です。", icon: "fa-comments", targetStage: ['midlife'], targetGender: ['all'] },
            { id: 20, text: "椅子に座ったまま、足首をゆっくり回してみる", desc: "日常の中で無理なく体を動かすきっかけをつくりましょう。", icon: "fa-person", targetStage: ['midlife'], targetGender: ['all'] },

            // 【子育て世代への支援・寛容性】
            { id: 4, text: "今日、身近な人のために、いつもより一つ多く何かをしてみよう。", desc: "身近な人たちに、安心感を与えることができます。", icon: "fa-baby", targetStage: ['all'], targetGender: ['all'] }
        ];

        const optionalMissions = [
            { id: 101, text: "身近な場所のゴミを1つ拾う", desc: "小さな行動で、みんなが気持ちよく過ごせる場所をつくります。", icon: "fa-recycle" },
            { id: 102, text: "誰かの良いところを見つけて伝える", desc: "温かい言葉を贈ると、自分も相手も前向きな気持ちになれます。", icon: "fa-heart" },
            { id: 103, text: "yoppyをまだ使っていない人に勧める", desc: "みんなでユーザー数を増やそう！", icon: "fa-lightbulb" }
        ];

        const WELLBEING_RECOVERY = 20;
        const OPTIONAL_WELLBEING_RECOVERY = 5;
        const DAILY_WELLBEING_DECAY = 10;
        let lastObservedDate = getTodayString();

        // --- 2. 状態管理 (In-Memory State for simple version) ---
        let appState = {
            wellbeing: 100,
            lastWellbeingDate: null,
            lastPlayedDate: null, // 'YYYY-MM-DD'
            currentMissionId: null,
            history: [], // [{date: 'YYYY-MM-DD', missionId: 1, text: "...", wellbeingChange: 20}]
            optionalHistory: [], // [{date: 'YYYY-MM-DD', missionId: 101, text: "...", wellbeingChange: 5}]
            profile: null // { stage: 'teen', gender: 'male', familyName: 'お母さん', familyAvatar: '🐻' }
        };

        // --- 3. DOM要素の取得 ---
        const splashScreen = document.getElementById('splashScreen');
        const profileScreen = document.getElementById('profileScreen');
        const mainScreen = document.getElementById('mainScreen');
        const familyNameInput = document.getElementById('familyName');
        const familyAvatarSelect = document.getElementById('familyAvatar');
        const userStageSelect = document.getElementById('userStage');
        const userGenderSelect = document.getElementById('userGender');
        const saveProfileBtn = document.getElementById('saveProfileBtn');
        const resetProfileBtn = document.getElementById('resetProfileBtn');
        const profileSummaryEl = document.getElementById('profileSummary');
        const tabs = [...document.querySelectorAll('[role="tab"]')];
        
        const familyNameDisplayEl = document.getElementById('familyNameDisplay');
        const familyAvatarDisplayEl = document.getElementById('familyAvatarDisplay');
        const wellbeingMoodDisplayEl = document.getElementById('wellbeingMoodDisplay');
        const wellbeingStatusEl = document.getElementById('wellbeingStatus');
        const wellbeingMeterEl = document.querySelector('.wellbeing-meter');
        const wellbeingMeterFillEl = document.getElementById('wellbeingMeterFill');
        const wellbeingValueEl = document.getElementById('wellbeingValue');
        const dateDisplayEl = document.getElementById('dateDisplay');
        const streakCountEl = document.getElementById('streakCount');
        const streakRewardEl = document.getElementById('streakReward');
        const headerCountdownTimerEl = document.getElementById('headerCountdownTimer');
        const headerNextMissionTimeEl = document.getElementById('headerNextMissionTime');
        const missionTextEl = document.getElementById('missionText');
        const missionDescEl = document.getElementById('missionDesc');
        const missionIconEl = document.getElementById('missionIcon');
        const completeBtn = document.getElementById('completeBtn');
        const completedOverlay = document.getElementById('completedOverlay');
        const optionalMissionsSection = document.getElementById('optionalMissionsSection');
        const optionalMissionsList = document.getElementById('optionalMissionsList');
        const historyListEl = document.getElementById('historyList');
        const emptyHistoryEl = document.getElementById('emptyHistory');

        // --- 4. アプリの初期化とロジック ---

        function initApp() {
            loadState();
            updateWellbeingForElapsedDays();
            
            if (!appState.profile) {
                // プロフィール未設定の場合は設定画面を表示
                profileScreen.classList.remove('hidden');
                mainScreen.classList.add('hidden');
            } else {
                // 設定済みの場合はメイン画面を表示
                profileScreen.classList.add('hidden');
                mainScreen.classList.remove('hidden');
                
                // 選択された値をフォームに反映させておく
                familyNameInput.value = appState.profile.familyName;
                familyAvatarSelect.value = appState.profile.familyAvatar;
                userStageSelect.value = appState.profile.stage;
                userGenderSelect.value = appState.profile.gender;
                saveProfileBtn.disabled = false;

                renderProfileSummary();
                renderWellbeing();
                updateDateDisplay();
                checkDailyMission();
                renderStreak();
                renderHistory();
            }
        }

        // フォーム入力時のボタン有効化
        function updateProfileButtonState() {
            saveProfileBtn.disabled = !userStageSelect.value || !familyNameInput.value.trim();
        }

        userStageSelect.addEventListener('change', updateProfileButtonState);
        familyNameInput.addEventListener('input', updateProfileButtonState);

        // プロフィールを保存してはじめる
        saveProfileBtn.addEventListener('click', () => {
            const familyName = familyNameInput.value.trim();
            if (!userStageSelect.value || !familyName) return;

            appState.profile = {
                stage: userStageSelect.value,
                gender: userGenderSelect.value,
                familyName,
                familyAvatar: familyAvatarSelect.value
            };
            
            // プロフィールを変えた場合は新しい属性でミッションを引き直すためリセット
            appState.lastPlayedDate = null; 
            appState.currentMissionId = null;
            saveState();
            
            // 画面切り替えとメイン処理の実行
            profileScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            renderProfileSummary();
            renderWellbeing();
            updateDateDisplay();
            checkDailyMission();
            renderStreak();
            renderHistory();
        });

        // プロフィール変更ボタン
        resetProfileBtn.addEventListener('click', () => {
            if(confirm("属性を変更すると、今日のミッションが新しくなる場合があります。変更しますか？")) {
                familyNameInput.value = appState.profile.familyName;
                familyAvatarSelect.value = appState.profile.familyAvatar;
                profileScreen.classList.remove('hidden');
                mainScreen.classList.add('hidden');
            }
        });

        function activateTab(tab) {
            tabs.forEach(item => {
                const isActive = item === tab;
                item.setAttribute('aria-selected', String(isActive));
                item.tabIndex = isActive ? 0 : -1;
                document.getElementById(item.getAttribute('aria-controls')).classList.toggle('hidden', !isActive);
            });
        }

        tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab)));
        document.querySelector('[role="tablist"]').addEventListener('keydown', event => {
            if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
            event.preventDefault();
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const currentIndex = tabs.indexOf(document.activeElement);
            const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
            tabs[nextIndex].focus();
            activateTab(tabs[nextIndex]);
        });

        function renderProfileSummary() {
            const stages = {
                teen: '中学生・高校生',
                youngAdult: '20代〜30代',
                adult: '社会人・大人',
                midlife: 'ミドル世代（40代〜50代）'
            };
            const genders = {
                all: '回答しない / その他',
                female: '女性',
                male: '男性'
            };
            profileSummaryEl.textContent = `${appState.profile.familyName} ・ ${stages[appState.profile.stage] || '未設定'} ・ ${genders[appState.profile.gender] || '未設定'}`;
        }

        function loadState() {
            const savedState = localStorage.getItem('socialGoodAppState');
            if (savedState) {
                appState = { ...appState, ...JSON.parse(savedState) };
                delete appState.totalPoints;
                if (appState.profile && appState.profile.stage === 'college') {
                    appState.profile.stage = 'youngAdult';
                }
                if (appState.profile) {
                    appState.profile.familyName = appState.profile.familyName || '家族';
                    appState.profile.familyAvatar = appState.profile.familyAvatar || '🐻';
                }
            }
            appState.wellbeing = Number.isFinite(appState.wellbeing)
                ? Math.min(100, Math.max(0, appState.wellbeing))
                : 100;
            appState.lastWellbeingDate = appState.lastWellbeingDate || getTodayString();
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

        function getPreviousDateString(dateString) {
            const [year, month, day] = dateString.split('-').map(Number);
            const date = new Date(year, month - 1, day - 1);
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        }

        function getNextDateString(dateString) {
            const [year, month, day] = dateString.split('-').map(Number);
            const date = new Date(year, month - 1, day + 1);
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        }

        function updateWellbeingForElapsedDays() {
            const today = getTodayString();
            while (appState.lastWellbeingDate < today) {
                const dateToCheck = getNextDateString(appState.lastWellbeingDate);
                if (dateToCheck >= today) break;
                const completedThatDay = appState.history.some(item => item.date === dateToCheck);
                if (!completedThatDay) {
                    appState.wellbeing = Math.max(0, appState.wellbeing - DAILY_WELLBEING_DECAY);
                }
                appState.lastWellbeingDate = dateToCheck;
            }
            saveState();
        }

        function getCurrentStreak() {
            const completedDates = new Set(appState.history.map(item => item.date));
            let date = getTodayString();
            if (!completedDates.has(date)) {
                date = getPreviousDateString(date);
            }
            if (!completedDates.has(date)) return 0;

            let streak = 0;
            while (completedDates.has(date)) {
                streak += 1;
                date = getPreviousDateString(date);
            }
            return streak;
        }

        function renderStreak() {
            const streak = getCurrentStreak();
            streakCountEl.textContent = `${streak}日連続達成`;
            streakRewardEl.textContent = '毎日の行動が家族の元気につながります';
        }

        function renderWellbeing() {
            const wellbeing = appState.wellbeing;
            const wellbeingStatus = wellbeing >= 80
                ? '元気いっぱい'
                : wellbeing >= 50
                    ? 'まずまず'
                    : wellbeing >= 25
                        ? '少し疲れ気味'
                        : wellbeing > 0
                            ? '元気がないみたい'
                            : '元気度が下がっています';
            const wellbeingMood = wellbeing >= 70
                ? '😊'
                : wellbeing >= 40
                    ? '😐'
                    : wellbeing > 0
                        ? '😟'
                        : '😢';

            familyNameDisplayEl.textContent = appState.profile.familyName;
            familyAvatarDisplayEl.textContent = appState.profile.familyAvatar;
            wellbeingMoodDisplayEl.textContent = wellbeingMood;
            wellbeingStatusEl.textContent = wellbeingStatus;
            wellbeingValueEl.textContent = wellbeing;
            wellbeingMeterFillEl.style.width = `${wellbeing}%`;
            wellbeingMeterEl.setAttribute('aria-valuenow', String(wellbeing));
            wellbeingMeterFillEl.classList.toggle('is-low', wellbeing < 50);
            wellbeingMeterFillEl.classList.toggle('is-critical', wellbeing < 25);
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

            const todayString = getTodayString();
            if (todayString !== lastObservedDate) {
                lastObservedDate = todayString;
                updateWellbeingForElapsedDays();
                updateDateDisplay();
                checkDailyMission();
                renderStreak();
                renderWellbeing();
            }
        }

        // 毎日異なるミッションを設定するか、既にクリアしているかチェック
        function checkDailyMission() {
            const todayStr = getTodayString();
            const userStage = appState.profile ? appState.profile.stage : 'all';
            const userGender = appState.profile ? appState.profile.gender : 'all';
            const currentMission = missions.find(mission => mission.id === appState.currentMissionId);
            const currentMissionMatchesProfile = currentMission &&
                (currentMission.targetStage.includes('all') || currentMission.targetStage.includes(userStage)) &&
                (currentMission.targetGender.includes('all') || currentMission.targetGender.includes(userGender));
            
            // 日付変更、初回起動、属性変更、保存済みミッションの属性不一致時に選び直す
            if (appState.lastPlayedDate !== todayStr || !appState.currentMissionId || !currentMissionMatchesProfile) {
                
                // 属性に合致するミッションをフィルタリング
                const suitableMissions = missions.filter(m => {
                    const matchStage = m.targetStage.includes('all') || m.targetStage.includes(userStage);
                    const matchGender = m.targetGender.includes('all') || m.targetGender.includes(userGender);
                    return matchStage && matchGender;
                });

                // フィルタリングされた中からランダムに選ぶ
                const randomMission = suitableMissions[Math.floor(Math.random() * suitableMissions.length)];
                
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
            
            completeBtn.querySelector('span').textContent = '家族を応援する';
            
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
                        ${isCompleted ? '達成済み' : `応援 +${OPTIONAL_WELLBEING_RECOVERY}`}
                    </button>
                `;
                optionalMissionsList.appendChild(article);
            });
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
                li.className = 'flex justify-between items-center gap-3 bg-white p-3 rounded-lg border border-gray-100';
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
                    <span class="text-right font-bold text-teal-700 text-sm">${Number.isFinite(item.wellbeingChange) ? `元気度 +${item.wellbeingChange}` : '達成'}</span>
                `;
                historyListEl.appendChild(li);
            });
        }

        // --- 5. イベントリスナー ---

        completeBtn.addEventListener('click', () => {
            const todayStr = getTodayString();
            const currentMission = getMissionById(appState.currentMissionId);
            if (!currentMission || appState.history.some(item => item.date === todayStr)) return;

            const previousWellbeing = appState.wellbeing;
            appState.wellbeing = Math.min(100, appState.wellbeing + WELLBEING_RECOVERY);
            appState.lastWellbeingDate = todayStr;
            appState.lastPlayedDate = todayStr; // 今日クリアしたことを記録
            
            appState.history.push({
                date: todayStr,
                missionId: currentMission.id,
                text: currentMission.text,
                wellbeingChange: appState.wellbeing - previousWellbeing
            });

            saveState();

            // UIの更新とエフェクト
            createConfetti();
            
            // 少し遅らせて画面を切り替える
            setTimeout(() => {
                renderWellbeing();
                renderStreak();
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

            const previousWellbeing = appState.wellbeing;
            appState.wellbeing = Math.min(100, appState.wellbeing + OPTIONAL_WELLBEING_RECOVERY);
            appState.optionalHistory.push({
                date: todayStr,
                missionId: mission.id,
                text: mission.text,
                wellbeingChange: appState.wellbeing - previousWellbeing
            });
            saveState();
            renderWellbeing();
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
