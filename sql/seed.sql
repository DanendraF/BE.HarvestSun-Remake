-- INSERT USER DEMO
INSERT INTO public.users (id, email, password, full_name, role) VALUES 
('c8a8165b-db0a-4a25-a13f-d3b2bf8efbe1', 'farmer@demo.id', '$2a$10$qGf/3H.Hq5B55y3f3b9e.eO/2kP6/p66wR3UuFqf7O8H0X9wLw3H.', 'Budi Santoso', 'farmer'),
('c8a8165b-db0a-4a25-a13f-d3b2bf8efbe2', 'officer@demo.id', '$2a$10$qGf/3H.Hq5B55y3f3b9e.eO/2kP6/p66wR3UuFqf7O8H0X9wLw3H.', 'Dr. Rina Susanti', 'officer'),
('c8a8165b-db0a-4a25-a13f-d3b2bf8efbe3', 'dinas@demo.id', '$2a$10$qGf/3H.Hq5B55y3f3b9e.eO/2kP6/p66wR3UuFqf7O8H0X9wLw3H.', 'Kepala Dinas Pertanian', 'dinas'),
('c8a8165b-db0a-4a25-a13f-d3b2bf8efbe4', 'admin@demo.id', '$2a$10$qGf/3H.Hq5B55y3f3b9e.eO/2kP6/p66wR3UuFqf7O8H0X9wLw3H.', 'Admin Utama', 'admin');

-- INSERT PROFILES
INSERT INTO public.farmer_profiles (user_id, phone, location, performance_score, status) VALUES
('c8a8165b-db0a-4a25-a13f-d3b2bf8efbe1', '081234567890', 'Desa Suka Maju', 92.00, 'active');

INSERT INTO public.officer_profiles (user_id, region, performance_score, status) VALUES
('c8a8165b-db0a-4a25-a13f-d3b2bf8efbe2', 'Kec. Tani Makmur', 94.00, 'active');

-- INSERT ASSIGNMENT
INSERT INTO public.officer_farmer_assignments (officer_id, farmer_id) VALUES
((SELECT id FROM public.officer_profiles WHERE user_id = 'c8a8165b-db0a-4a25-a13f-d3b2bf8efbe2'), 
 (SELECT id FROM public.farmer_profiles WHERE user_id = 'c8a8165b-db0a-4a25-a13f-d3b2bf8efbe1'));

-- INSERT FARMS
INSERT INTO public.farms (id, user_id, name, location, size, crop_type, status, health_score) VALUES
('d8a8165b-db0a-4a25-a13f-d3b2bf8efbe1', 'c8a8165b-db0a-4a25-a13f-d3b2bf8efbe1', 'Lahan Padi A1', 'Desa Suka Maju, Kec. Tani Makmur', 2.5, 'Padi', 'active', 92);

-- INSERT CROPS
INSERT INTO public.crops (farm_id, name, variety, planting_date, expected_harvest, growth_stage, health_status, progress) VALUES
('d8a8165b-db0a-4a25-a13f-d3b2bf8efbe1', 'Padi IR64', 'IR64', '2026-04-15', '2026-07-20', 'Vegetatif', 'healthy', 65);

-- INSERT ACTIVITIES
INSERT INTO public.activities (farm_id, type, description, date, status, cost) VALUES
('d8a8165b-db0a-4a25-a13f-d3b2bf8efbe1', 'fertilizing', 'Pemupukan NPK fase vegetatif', '2026-06-18', 'completed', 250000);
