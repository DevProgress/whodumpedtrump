require 'json'
require 'net/http'

SPREADSHEET_ID = '1j75R6Lmzg1s2yD0Z7Mvu_KSHvMHbpvQ1CQQubGPFAwo'
SPREADSHEET_RANGE = 'A2:E500'

task :update_data do
  url = "https://spreadsheets.google.com/feeds/list/#{SPREADSHEET_ID}/od6/public/basic?alt=json"
  uri = URI(url)
  response = Net::HTTP.get(uri)
  data = JSON.parse(response)

  parsed_data = data['feed']['entry'].map do |entry|
    content = entry['content']['$t']
    entry_hash = Hash[
      content.split(', ').map { |key_val_pair| key_val_pair.split(': ') }
    ]
    entry_hash['name'] = entry['title']['$t']
    entry_hash
  end

  File.open('_data/retractions.json', 'w') do |f|
    f.puts parsed_data.to_json
  end
end

