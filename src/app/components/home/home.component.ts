import { Component } from "@angular/core"
// import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import Typed from "typed.js"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

@Component ( {
  selector: "app-home",
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
} )
export class HomeComponent {
  public typed: Typed | undefined
  // public faTwitter: any = faXTwitter
  // public faInstagram: any = faInstagram
  // public faFacebook: any = faFacebook

  public ngOnInit ( ) {
    this.typed = new Typed ( "#typed", {
      strings: [
        "Holy Mother of God",
        "Holy Virgin of Virgins",
        "Mother of Christ",
        "Mother of the Church",
        "Mother of Mercy",
        "Mother of Divine Grace",
        "Mother of Hope",
        "Mother Most Pure",
        "Mother Most Chaste",
        "Mother Inviolate",
        "Mother Undefiled",
        "Mother Most Amiable",
        "Mother Most Admirable",
        "Mother of Good Counsel",
        "Mother of our Creator",
        "Mother of our Savior",
        "Virgin Most Prudent",
        "Virgin Most Venerable",
        "Virgin Most Renowned",
        "Virgin Most Powerful",
        "Virgin Most Merciful",
        "Virgin Most Faithful",
        "Mirror of Justice",
        "Seat of Wisdom",
        "Cause of our Joy",
        "Spiritual Vessel",
        "Vessel of Honor",
        "Singular Vessel of Devotion",
        "Mystical Rose",
        "Tower of David",
        "Tower of Ivory",
        "House of Gold",
        "Ark of the Covenant",
        "Gate of Heaven",
        "Morning Star",
        "Health of the Sick",
        "Refuge of Sinners",
        "Comfort of Migrants",
        "Comforter of the Afflicted",
        "Help of Christians",
        "Queen of Angels",
        "Queen of Patriarchs",
        "Queen of Prophets",
        "Queen of Apostles",
        "Queen of Martyrs",
        "Queen of Confessors",
        "Queen of Virgins",
        "Queen of All Saints",
        "Queen Conceived without Original Sin",
        "Queen Assumed into Heaven",
        "Queen of the Most Holy Rosary",
        "Queen of Families",
        "Queen of Peace",
        "Pray for Us"
      ],
      typeSpeed: 60,
    } )
  }
}
