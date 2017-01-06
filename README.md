#DB

##messagesテーブル
###Columns
*text(text)
*image(string)
*group_id(references)
*user_id(references)

####NULLNOT
text

####INDEX
text

###Association
belongs_to :user
belongs_to :group

---
##usersテーブル
###Column
*name(string)

####NULLNOT
name

####INDEX
name

###Association
has_many :messages
has_many :usergroups
has_many :groups, through: :usergroups

---
##groupsテーブル
###Column
*name(string)

####NULLNOT
name

####INDEX
name

###Association
has_many :messages
has_many :usergroups
has_many :users, through: :usergroups

---
##usergroupsテーブル
###Column
*user_id(references)
*group_id(references)

###Association
belongs_to :user
belongs_to :group