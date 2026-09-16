CREATE DATABASE IF NOT EXISTS plastic_awareness CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE plastic_awareness;

CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  mobile VARCHAR(15) NOT NULL UNIQUE,
  village VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_users_district (district)
);

CREATE TABLE IF NOT EXISTS awareness_content (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(60) NOT NULL,
  image VARCHAR(500),
  language VARCHAR(10) NOT NULL DEFAULT 'en',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_content_category (category),
  INDEX idx_content_language (language)
);

CREATE TABLE IF NOT EXISTS quiz_questions (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(500) NOT NULL,
  option_a VARCHAR(255) NOT NULL,
  option_b VARCHAR(255) NOT NULL,
  option_c VARCHAR(255) NOT NULL,
  option_d VARCHAR(255) NOT NULL,
  correct_answer ENUM('a','b','c','d') NOT NULL,
  explanation VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS quiz_results (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NULL,
  score INT UNSIGNED NOT NULL,
  total_questions INT UNSIGNED NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_results_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS feedback (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(100) NOT NULL,
  village VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  rating TINYINT UNSIGNED NOT NULL CHECK (rating BETWEEN 1 AND 5),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_feedback_created (created_at)
);

INSERT INTO quiz_questions (question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES
('Which bin is best for food scraps?', 'Wet waste bin', 'Plastic bin', 'Roadside', 'River', 'a', 'Food scraps belong with wet or organic waste.'),
('What should we do before sending bottles for recycling?', 'Fill them with soil', 'Clean and dry them', 'Burn them', 'Hide them', 'b', 'Clean, dry material is easier for collection systems to handle.'),
('Which is a good alternative to single-use bags?', 'Reusable cloth bag', 'More thin bags', 'Burnt plastic', 'No bag', 'a', 'A strong reusable bag can be used many times.'),
('Why should plastic not be burned?', 'It makes healthy smoke', 'It can release harmful smoke', 'It becomes water', 'It disappears safely', 'b', 'Burning plastic can release harmful smoke and pollutants.'),
('What does the recycling symbol help identify?', 'A plastic type', 'A village name', 'A food recipe', 'A bus route', 'a', 'The number or symbol can help identify the plastic type.'),
('Where should plastic litter never be thrown?', 'A collection point', 'A river or lake', 'A clean sack', 'A recycling centre', 'b', 'Plastic can harm water, animals and people when dumped in water.'),
('Which action keeps plastic recyclable?', 'Mixing it with wet waste', 'Keeping it clean and separate', 'Throwing it on the road', 'Burning it', 'b', 'Separation prevents contamination.'),
('What is reuse?', 'Using an item again safely', 'Throwing it quickly', 'Buying more items', 'Hiding waste', 'a', 'Reuse means using a suitable item again instead of discarding it.'),
('Who can help keep a village plastic-free?', 'Only one person', 'Everyone in the village', 'Only animals', 'Nobody', 'b', 'Shared action creates cleaner communities.'),
('What is a responsible disposal step?', 'Use an authorized collection channel', 'Throw plastic in a field', 'Put it in a drain', 'Burn it near a home', 'a', 'Follow local collection guidance and authorized channels.');
